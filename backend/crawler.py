import requests
from bs4 import BeautifulSoup
import random as rd
import time
# import selenium
# from selenium import webdriver
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC
# from selenium.webdriver.common.by import By
# from selenium.common.exceptions import TimeoutException

class nHentaiSearcher:
    def __init__(self,num):
        self.__target = requests.get("https://nhentai.net/g/"+num)
        self.__num = num
        self.__tempArr = []
    def searchTitle(self):
        if self.__target.status_code != 200:
            return self.__num + "哭啊，查無此本！"
        else: 
            page = BeautifulSoup(self.__target.text,"html.parser")
            title = page.find("h2","title").text
            tempTag = page.find_all("span","name")
            tags = []
            for i in tempTag:
                tags.append("[" + i.text + "]")
            return self.processInfo(title,tags)
    def processInfo(self,title,tags):
        self.__tempArr.append(self.__num)
        self.__tempArr.append(title)
        for i in tags:
            self.__tempArr.append(i)
        return self.__tempArr

class tagSearcher:
    def __init__(self,inputStr):
        self.__target = requests.get("https://nhentai.net/search/?q=" + inputStr)
        self.__tag = inputStr
        self.__tempStr = ""
    def searchDoujin(self):
        try:
            page = BeautifulSoup(self.__target.text,"html.parser")
        
            # 處理本子總數
            totalStr = page.find("h1").text
            quantity = totalStr.split(" ")[1]
            doujinNum = ""
            for i in quantity:
                if i != ',':
                    doujinNum += i

            # 總頁數
            totalPageNum = int(int(doujinNum) / 25) + 1
            pageNum = rd.randint(1,int(totalPageNum))
            titles = page.find_all("div","caption")
            # print(len(titles))
            randNum = rd.randint(0,len(titles) - 1)
            self.__target = requests.get("https://nhentai.net/search/?q=" + self.__tag + "&page=" + str(pageNum))
            page = BeautifulSoup(self.__target.text,"html.parser")
            link = page.find_all('a', href=True)[23 + randNum]
            self.__tempStr += "https://nhentai.net" + link['href']
            return self.__tempStr
        except:
            return "哭啊，查無此本！"

class imageSearcher:
    def __init__(self,mode,crawlNum):
        self.crawlNum = int(crawlNum) if int(crawlNum) <= 5 else 5
        self.mode = mode
        if mode == "不可以色色":
            self.target = requests.get("https://anime-pictures.net/")
        # elif mode == "可以色色":
        #     self.target = webdriver.Chrome()
        #     self.target.get("https://hanime.tv/browse/images/")
        #     self.target.execute_script("window.scrollTo(0,document.body.scrollHeight)")
        #     time.sleep(3)
        #     self.target.close()

    def getNormalImage(self):
        # 首頁找圖
        page = BeautifulSoup(self.target.text,"html.parser")
        title = page.find_all("div","post_content index_page")
        imgArr = []
        for i in range(self.crawlNum):
            tempStr = ""
            titleNum = rd.randint(1,2)
            images = title[titleNum].find_all("span","img_block2")
            rand = rd.randint(0,11)
            img = images[rand]
            link = img.find("a")['href']
            link = link.replace("en","zh_CN")

            # 進入該圖
            self.target = requests.get("https://anime-pictures.net" + link)
            page = BeautifulSoup(self.target.text,"html.parser")
            truePage = page.find("div",{"id":"big_preview_cont"})
            trueLink = truePage.find("a")['href']
            tempStr += "https://anime-pictures.net" + trueLink
            imgArr.append(tempStr)   
        return imgArr
    
    # def getHentaiImage(self):
    #     page = BeautifulSoup(self.target.text,"html.parser")
    #     tempStr = ""
    #     image = page.findAll("a")
    #     randNum = rd.randint(0,len(image))
    #     tempStr += image[20]['href']
    #     print(tempStr)

class covid19:
    def __init__(self):
        self.__target = requests.get("https://covid-19.nchc.org.tw/dt_005-covidTable_taiwan.php")
    def getDailyInfo(self):
        page = BeautifulSoup(self.__target.text,"html.parser")
        data = []
        totalInfected = page.find("h1","country_recovered mb-1 text-info").text
        newTotalInfected = totalInfected.replace('+','')
        # 日期
        info = page.find("div","col-lg-12 main")
        date = info.find_all("span")[1].text
        newDate = date.split(' ')[18]
        data.append(newDate)
        # 本土確診
        domesticStr = page.find_all("span","country_confirmed_percent")[1].text
        newDomesticStr = domesticStr.replace('本土病例 ','')
        data.append('本土： ' + newDomesticStr)
        # 境外確診
        foreignStr = str(int(newTotalInfected) - int(newDomesticStr))
        data.append('境外： ' + foreignStr)
        # 死亡人數
        deathStr = page.find("span","country_deaths_change").text
        newDeathStr = deathStr.replace('+','')
        data.append('死亡： ' + newDeathStr)
        return data

# a = "1 2"
# a = a.split(" ")
# print(a)
# a = imageSearcher("不可以色色",int(input().split(" ")[1]))
# print(a.getNormalImage())