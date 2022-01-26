import { useState } from "react";
import { Tag, message, Card } from "antd";
import axios from "axios";
import styled from "styled-components";
import ChuehStyledComp from "../../Styles/ChuehStyledComp";

const { ChuehSearch, ChuehText } = ChuehStyledComp();

const HentaiSection = styled(Card)`
    animation: menuFadeIn 1s;
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
            <ChuehSearch value={tagsToSearch} onChange={(e) => setTagsToSearch(e.target.value)} onSearch={() => handleOnSearch(tagsToSearch)}></ChuehSearch>
            {currentDoujin !== "" 
            ? <HentaiSection>
                <ChuehText>
                    {currentDoujin !== "哭啊，查無此本！" ?
                    <a style={{fontSize: "0.4cm"}} href={currentDoujin}>{currentDoujin}</a>
                    : currentDoujin
                    }
                </ChuehText>
            </HentaiSection>
            : <></> }
        </>
    )
}