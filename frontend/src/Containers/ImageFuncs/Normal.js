import { useState, useEffect } from "react";
import { Card, Input, Row, Tabs, Tag, Col, message, Image } from "antd";
import axios from "axios";
import styled from "styled-components"

const Text = styled.div`
    text-align: center;
    font-size: 0.5cm;
    color: #114514;
`

export default () => {
    const [imageNum, setImageNum] = useState("");
    const [images, setImages] = useState([]);
        
    const FetchImage = async (num) => {
        let res = await axios.post(`http://127.0.0.1:8000/NormalImage/?mode=不可以色色&num=${num}`);
        let result = res.data;
        setImages(result);
    }
    const handleOnSearch = (num) => {
        loading();
        FetchImage(num);
    }
    const loading = () => {
        return(message.loading("Loading..."));
    }
    
    return(
        <>
            <Input.Search value={imageNum} onChange={(e) => setImageNum(e.target.value)} onSearch={() => handleOnSearch(parseInt(imageNum))}></Input.Search>
            {imageNum !== "" 
            ? images.map((e) => <li><a href={e}>{e}</a></li>)
            : <></> }
        </>
    )
}