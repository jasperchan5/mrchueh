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

    return { Covid, TicTacToe, Solitaire };
}


export default Cards;