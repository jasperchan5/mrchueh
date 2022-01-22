import "./Chueh.css"
import { Card, Input, Row, Tabs, Tag, Col, message } from "antd";
import styled, { keyframes } from "styled-components"
import ChatBox from "./SolitaireFuncs/ChatBox";
import { useState, useEffect } from "react";
import Board from "./TicTacToeFuncs.js/Board";
import axios from "axios";

import "./Chueh.css"
import Tags from "./HentaiFuncs/Tags";
import GodLanguage from "./HentaiFuncs/GodLanguage";
import Normal from "./ImageFuncs/Normal";


const Title = styled.div`
    text-align: center;
    font-size: 0.6cm;
    font-weight: 600;
`;

const fade_in = keyframes`
    0%: {opacity: 0};
    100%: {opacity: 1};
`

const Text = styled.div`
    text-align: center;
    font-size: 2.5cm;
    color: #1890ff;
    animation: ${fade_in} 1s;
`

const Cards = () => {
    const Covid = ({fadeIn}) => {
        // const [covidData, setCovidData] = useState([]);
        // const FetchCovid = async () => {
        //     let res = await axios.get("http://127.0.0.1:8000/Covid");
        //     let result = res.data;
        //     setCovidData(result);
        // }
        // const loading = () => {
        //     return(message.loading("Loading..."));
        // }
        // useEffect(async () => {
        //     if(covidData !== []) loading();
        //     await FetchCovid();
        // }, [])
        return(<Card className={fadeIn} style={{height: "500px"}} title={<Title>每日疫情資訊</Title>}>
            {/* <Row align="center">
                <div style={{fontSize:"1cm"}}>
                    {covidData[0]}
                </div>
            </Row>
            <Row>
                {covidData.slice(1,4).map((e) => <Col md={8}>
                    <Card title={<Title>{e.split("：")[0]}</Title>} style={{height: "350px"}}>
                        <Text>{e.split("：")[1]}</Text>
                    </Card>
                </Col>)}
            </Row> */}
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
        return <Card className={fadeIn} style={{height: "800px"}} title={<Title>推本子</Title>} tabList={tabList} onTabChange={(e) => handleTabClick(e)}>
            {currentTab === "0" ? <Tags></Tags> : <GodLanguage></GodLanguage>}
        </Card>
    } 

    const ImageRecommend = ({fadeIn}) =>{
        const tabList = [{
            key: "1", tab: "不可以色色"
        },{
            key: "2", tab: "可以色色"
        }]
        return <Card className={fadeIn} style={{height: "800px"}} title={<Title>推圖</Title>} tabList={tabList}>
            <Normal></Normal>
        </Card> 
    } 

    const Solitaire = ({fadeIn}) =>{
        return(
            <Card className={fadeIn} style={{height: "800px"}} title={<Title>接龍</Title>}>
                {"你好"}
                <ChatBox></ChatBox>
            </Card>
        )
    } 

    const TicTacToe = ({fadeIn}) => {
        return(
            <Card className={fadeIn} style={{height: "500px"}} title={<Title>井字遊戲</Title>}>
                <Row>
                    <Board></Board>
                </Row>
            </Card>
        )
    }

    return { Covid, HentaiRecommend, ImageRecommend, TicTacToe, Solitaire }
}


export default Cards;