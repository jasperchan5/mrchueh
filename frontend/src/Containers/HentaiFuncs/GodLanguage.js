import { useState, useEffect } from "react";
import { Card, Input, Row, Tabs, Tag, Col, message } from "antd";
import axios from "axios";
import styled from "styled-components"

const Text = styled.div`
    text-align: center;
    font-size: 0.5cm;
    color: #114514;
`

export default () => {
    const [numToSearch, setNumToSearch] = useState("");
    const [currentDoujin, setCurrentDoujin] = useState("");
        
    const FetchTag = async (num) => {
        let res = await axios.post(`http://127.0.0.1:8000/GodLanguage/?num=${num}`);
        let result = res.data;
        setCurrentDoujin(result);
    }
    const handleOnSearch = (num) => {
        loading();
        FetchTag(num);
    }
    const loading = () => {
        return(message.loading("Loading..."));
    }
    
    return(
        <>
            <Input.Search value={numToSearch} onChange={(e) => setNumToSearch(e.target.value)} onSearch={() => handleOnSearch(numToSearch)}></Input.Search>
            {currentDoujin !== "" 
            ? <Text>{numToSearch}</Text>
            : <></> }
            <Text>{currentDoujin.split(" ").map((e) => <Tag>{e}</Tag>)}</Text>
        </>
    )
}