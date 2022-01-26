import { useState, useEffect } from "react";
import { Card, Row, Col, message } from "antd";
import axios from "axios";
import styled from "styled-components"
import ChuehStyledComp from "../../Styles/ChuehStyledComp";

const { fade_in } = ChuehStyledComp();

const Title = styled.div`
    text-align: center;
    font-size: 0.6cm;
    font-weight: 600;
`;

const Text = styled.div`
    text-align: center;
    font-size: 2.5cm;
    color: #1890ff;
    animation: ${fade_in} 1s;
`;

export default () => {
    const [covidData, setCovidData] = useState([]);
    const FetchCovid = async () => {
        let res = await axios.get("http://127.0.0.1:8000/Covid");
        let result = res.data;
        setCovidData(result);
    }
    const loading = () => {
        return(message.loading("Loading..."));
    }
    const CovidInfoAnimation = () => {
        for(let i=1; i<2; i++){
            for(let j=0; j<=covidData[i].split("：")[1]; j++){
                setCovidData([j,...covidData.slice(i+1,3)]);
            }
        }
    }
    useEffect(() => {
        loading();
        FetchCovid();
    }, [])
    return(
        <>
            <Row align="center">
                <div style={{fontSize:"1.5cm"}}>
                    {covidData[0]}
                </div>
            </Row>
            <Row>
                {covidData.slice(1,4).map((e, index) => <Col md={8}>
                    <Card title={<Title>{e.split("：")[0]}</Title>} style={{height: "350px"}}>
                        <Text id={"CovidInfo-"+index}>{e.split("：")[1]}</Text>
                    </Card>
                </Col>)}
            </Row>
        </>
    )
}