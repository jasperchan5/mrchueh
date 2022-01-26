import { Card, Row } from "antd";
import { useState } from "react";

import "./Styles/Chueh.css"
import { Tags, GodLanguage, Normal, CovidInfo, Board, ChatBox } from "./Funcs/FuncsIndex";
import ChuehStyledComp from "./Styles/ChuehStyledComp"; 
 
const { ChuehTitle } = ChuehStyledComp();

const Cards = () => {

    const Covid = ({fadeIn}) => {
        
        return(<Card className={fadeIn} style={{height: "500px"}} title={<ChuehTitle>每日疫情資訊</ChuehTitle>}>
            <CovidInfo></CovidInfo>
        </Card>)
    }

    const HentaiRecommend = ({fadeIn}) => {
        const [currentTab, setCurrentTab] = useState("0");
        
        const handleTabClick = (e) => {
            setCurrentTab(e);
        }
        
        const tabList = [{
            key: "0", tab: "找本子"
        },{
            key: "1", tab: "神之語言"
        }]
        return <Card className={fadeIn} style={{height: "800px"}} title={<ChuehTitle>推本子</ChuehTitle>} tabList={tabList} onTabChange={(e) => handleTabClick(e)}>
            {currentTab === "0" ? <Tags></Tags> : <GodLanguage></GodLanguage>}
        </Card>
    } 

    const ImageRecommend = ({fadeIn}) =>{
        const tabList = [{
            key: "1", tab: "不可以色色"
        },{
            key: "2", tab: "可以色色"
        }]
        return <Card className={fadeIn} style={{height: "800px"}} title={<ChuehTitle>推圖</ChuehTitle>} tabList={tabList}>
            <Normal></Normal>
        </Card> 
    } 

    const Solitaire = ({fadeIn}) =>{
        return(
            <Card className={fadeIn} style={{height: "800px"}} title={<ChuehTitle>接龍</ChuehTitle>}>
                {"你好"}
                <ChatBox></ChatBox>
            </Card>
        )
    } 

    const TicTacToe = ({fadeIn}) => {
        return(
            <Card className={fadeIn} style={{height: "500px"}} title={<ChuehTitle>井字遊戲</ChuehTitle>}>
                <Row>
                    <Board></Board>
                </Row>
            </Card>
        )
    }

    return { Covid, HentaiRecommend, ImageRecommend, TicTacToe, Solitaire };
}


export default Cards;