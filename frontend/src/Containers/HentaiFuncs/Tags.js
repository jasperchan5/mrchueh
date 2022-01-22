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
    const [tagsToSearch, setTagsToSearch] = useState("");
    const [currentDoujin, setCurrentDoujin] = useState("");
        
    const FetchTag = async (tags) => {
        let validTags = "";
        tags.split(" ").map((e,index) => index === 0 ? validTags+=e : validTags+=`+${e}`);
        let res = await axios.post(`http://127.0.0.1:8000/Tag/?inputStr=${validTags}`);
        let result = res.data;
        setCurrentDoujin(result);
    }
    const handleOnSearch = (tags) => {
        loading();
        FetchTag(tags);
    }
    const loading = () => {
        return(message.loading("Loading..."));
    }
    
    return(
        <>
            <Input.Search value={tagsToSearch} onChange={(e) => setTagsToSearch(e.target.value)} onSearch={() => handleOnSearch(tagsToSearch)}></Input.Search>
            {currentDoujin !== "" 
            ? <Text>{tagsToSearch.split(" ").map((e) => <Tag>{e}</Tag>)}</Text>
            : <></> }
            <Text><a href={currentDoujin}>{currentDoujin}</a></Text>
        </>
    )
}