import { useState } from "react";
import {  message } from "antd";
import axios from "axios";
import ChuehStyledComp from "../../Styles/ChuehStyledComp";

const { ChuehSearch } = ChuehStyledComp();

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
            <ChuehSearch value={imageNum} onChange={(e) => setImageNum(e.target.value)} onSearch={() => handleOnSearch(parseInt(imageNum))}></ChuehSearch>
            {imageNum !== "" 
            ? images.map((e) => <li><a href={e}>{e}</a></li>)
            : <></> }
        </>
    )
}