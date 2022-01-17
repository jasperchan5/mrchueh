import "./Chueh.css"
import { Card, Input, Tabs, Tag } from "antd";
import styled from "styled-components"
import ChatBox from "./SolitaireFuncs/ChatBox";
import { useState, useEffect } from "react";

const Title = styled.div`
    font-size: 0.6cm;
`;

const Cards = () => {
    const Covid = ({fadeIn}) => {
        return(<Card className={fadeIn} style={{height: "800px"}} title={<Title>每日疫情資訊</Title>}></Card>)
    }

    const HentaiRecommend = ({fadeIn}) => {
        const [currentTab, setCurrentTab] = useState("0");
        const [tagList, setTagList] = useState(["a","b","c"]);
        // useEffect(() => {
        //     console.log(currentTab);
        // }, [currentTab]);
        const handleTabClick = (e) => {
            setCurrentTab(e);
        }
        const tabList = [{
            key: "0", tab: "找本子"
        },{
            key: "1", tab: "神之語言"
        }]
        return <Card className={fadeIn} style={{height: "800px"}} title={<Title>推本子</Title>} tabList={tabList} onTabChange={(e) => handleTabClick(e)}>
            {currentTab === "0" ? tagList.map((e) => <Tag>{e}</Tag>) : <Input.Search></Input.Search>}
        </Card>
    } 

    const ImageRecommend = ({fadeIn}) =>{
        const tabList = [{
            key: "1", tab: "不可以色色"
        },{
            key: "2", tab: "可以色色"
        }]
        return <Card className={fadeIn} style={{height: "800px"}} title={<Title>推圖</Title>} tabList={tabList}></Card> 
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
            <Card className={fadeIn} style={{height: "800px"}} title={<Title>井字遊戲</Title>}></Card>
        )
    }

    return { Covid, HentaiRecommend, ImageRecommend, TicTacToe, Solitaire }
}


export default Cards;