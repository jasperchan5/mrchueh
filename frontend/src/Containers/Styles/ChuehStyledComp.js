import styled, { keyframes } from "styled-components";
import { Input } from "antd";

export default () => {

    const fade_in = keyframes`
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    `;

    const ChuehSearch = styled(Input.Search)`
        width: 50%;
        margin-left: 25%;
        padding: 5px;
        animation: ${fade_in} 1s;
    `;

    const ChuehTitle = styled.div`
        text-align: center;
        font-size: 0.6cm;
        font-weight: 600;
        padding: 10px;
    `;

    const ChuehText = styled.div`
        text-align: center;
        font-size: 0.5cm;
    `

    return { ChuehSearch, fade_in, ChuehText, ChuehTitle };
} 