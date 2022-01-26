import { Button, Col } from "antd"
import styled from "styled-components";
import { useState, useEffect } from "react";

const Cell = styled(Button)`
    height: 120px;
    width: 100%;
    background: "f5f5f5";
`;

export default () => {
    const [boardStatus, setBoardStatus] = useState(Array(9).fill(" "));
    const [player, setPlayer] = useState(0);
    useEffect(() => {
        console.log(boardStatus);
    }, [boardStatus]);
    const winBoard = () => {
        
         
    }
    const handleBoardClick = (i) => {
        setPlayer(player+1);
        if(boardStatus[i] === " ")
            if(player % 2 === 0)
                setBoardStatus([...boardStatus.slice(0,i),"○",...boardStatus.slice(i+1)]);
            else
                setBoardStatus([...boardStatus.slice(0,i),"×",...boardStatus.slice(i+1)]);
    }
    return(
        boardStatus.map((e,i) => <>
            <Col offset={i % 3 === 0 ? 6 : 0} md={3}>
                <Cell onClick={() => handleBoardClick(i)}>{e}</Cell>
            </Col>
            <Col md={i % 3 == 2 ? 9 : 0}></Col>
        </>)
    )
}