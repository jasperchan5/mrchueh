from typing import Optional
from fastapi import FastAPI
from markupsafe import string
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from crawler import *

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/Covid")
def getCovidInfo():
    covidBot = covid19()
    res = covidBot.getDailyInfo()
    print(res)
    return res 

@app.post("/Tag/")
def getTagInfo(inputStr):
    tagBot = tagSearcher(inputStr)
    res = tagBot.searchDoujin()
    print(res)
    return res

@app.post("/GodLanguage/")
def getTagInfo(num):
    hentaiBot = nHentaiSearcher(num)
    res = hentaiBot.searchTitle()
    print(res)
    return res

@app.post("/NormalImage")
def getImage(mode,num):
    imageBot = imageSearcher(mode,num)
    res = imageBot.getNormalImage()
    print(res)
    return res