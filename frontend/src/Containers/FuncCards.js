import "./Chueh.css"
import { Card } from "antd";
import styled from "styled-components"
import ChatBox from "./SolitaireFuncs/ChatBox";

const Title = styled.div`
    font-size: 0.6cm;
`;

const Cards = () => {
    const Covid = () => {
        return(<Card className="chueh_func_in" style={{height: "450px"}} title={<Title>每日疫情資訊</Title>}></Card>)
    }

    const HentaiRecommend = () => {
        const tabList = [{
            key: "1", tab: "找本子"
        },{
            key: "2", tab: "神之語言"
        }]
        return <Card className="chueh_func_in" style={{height: "450px"}} title={<Title>推本子</Title>} tabList={tabList}></Card>
    } 

    const ImageRecommend = () =>{
        const tabList = [{
            key: "1", tab: "不可以色色"
        },{
            key: "2", tab: "可以色色"
        }]
        return <Card className="chueh_func_in" style={{height: "450px"}} title={<Title>推圖</Title>} tabList={tabList}></Card> 
    } 

    const Solitaire = () =>{
        return(
            <Card className="chueh_func_in" style={{height: "450px"}} title={<Title>接龍</Title>}>
                {"你好"}
                <ChatBox></ChatBox>
            </Card>
        )
    } 

    const TicTacToe = () => {
        return(
            <Card className="chueh_func_in" style={{height: "450px"}} title={<Title>井字遊戲</Title>}></Card>
        )
    }

    return { Covid, HentaiRecommend, ImageRecommend, TicTacToe, Solitaire }
}


export default Cards;