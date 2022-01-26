import { useState, useEffect } from "react";
import { Tag, message, Button, Col, Row, Card } from "antd";
import axios from "axios";
import ChuehStyledComp from "../../Styles/ChuehStyledComp";
import { Content, Header } from "antd/lib/layout/layout";
import styled from "styled-components";

import "../../Styles/Chueh.css"

const { ChuehSearch, ChuehText } = ChuehStyledComp();

const HentaiSection = styled(Card)`
    animation: menuFadeIn 2s;
    background: #595959;
`

export default () => {
    const [numToSearch, setNumToSearch] = useState("");
    const [currentDoujin, setCurrentDoujin] = useState([]);
    const [currentLink, setCurrentLink] = useState("");
        
    const FetchTag = async (num) => {
        let res = await axios.post(`http://127.0.0.1:8000/GodLanguage/?num=${num}`);
        let result = res.data;
        setCurrentDoujin(result);
    }
    const handleOnSearch = (num) => {
        loading();
        setCurrentLink("");
        FetchTag(num);
    }
    const handleRandom = async () => {
        let randNum = Math.round(Math.random()*400000);
        console.log(randNum);
        setNumToSearch(randNum);
        handleOnSearch(randNum);
    }
    const loading = () => {
        return(message.loading("Loading..."));
    }
    const MapCurrentDoujin = () => {
        try{
            return(
                currentDoujin.map((e,index) => 
                index === 0 ? 
                <Card style={{fontSize: "1cm", fontFamily: "cursive"}}>
                    {e}
                    <br></br>
                    <Button onClick={() => setCurrentLink("https://nhentai.net/g/"+numToSearch)}>Generate link: </Button>
                    <br></br>
                    <a href={currentLink} style={{fontSize: "0.4cm"}}>{currentLink}</a>
                </Card> : 
                    index === 1 ? 
                    <Card style={{fontSize: "0.5cm", fontFamily: "monospace"}}>{e}</Card> :
                    <Tag>{e}</Tag>
                )
            )
        }
        catch(e){
            return(
                <span style={{color: "#ffffff"}}>哭啊，查無此本！</span>
            )
        }
    }

    return(
        <>
            <Row>
                <Button style={{width: "100%"}} onClick={handleRandom}>隨機！</Button>
            </Row>
            <Row>
                <ChuehSearch value={numToSearch} 
                onChange={(e) => setNumToSearch(e.target.value)} 
                onSearch={() => handleOnSearch(numToSearch)}></ChuehSearch>
            </Row>
            {currentDoujin.length !== 0 ? 
            <HentaiSection>
                <ChuehText><MapCurrentDoujin/></ChuehText>
            </HentaiSection> : <></>}
        </>
    )
}