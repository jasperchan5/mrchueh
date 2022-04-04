import { useEffect, useState } from "react";
import { Button, Row, Col, Avatar,Space } from "antd"
import { Header, Content, Footer } from "antd/lib/layout/layout"
import { CaretUpOutlined,CaretDownOutlined } from "@ant-design/icons"

import Cards from "./FuncCards";
import ChuehMenu from "./ChuehMenu";

import "../../node_modules/antd/dist/antd.css"
import "./Styles/Chueh.css"

function MainPage() {
  const [menuPressed, setMenuPressed] = useState(false);
  const [alreadyOpen, setAlreadyOpen] = useState([false,false,false,false,false]);
  const [menuSize, setMenuSize] = useState([0,0]);
  const [funcName, setFuncName] = useState("");
  const { Covid, Solitaire, TicTacToe } = Cards();

  useEffect(() => {
    console.log(alreadyOpen);
  },[alreadyOpen]);
  
  const handleMenu = () => {
    if(!menuPressed){
      setMenuPressed(true);
      setMenuSize(["100%","100%"]);
    }
    else{
      setMenuPressed(false);
      setMenuSize([0,0]);
    }
  }

  const handleFuncs = (index,str) => {
    if(funcName === ""){ 
      setFuncName(str);
      setAlreadyOpen([...alreadyOpen.slice(0,index),true,...alreadyOpen.slice(index+1)]);
    }
    else{
      if(str !== funcName){
        setFuncName(str);
        let prevTrueIndex = alreadyOpen.indexOf(true);
        if(prevTrueIndex < index){
          setAlreadyOpen([...alreadyOpen.slice(0,prevTrueIndex),false,...alreadyOpen.slice(prevTrueIndex+1,index),true,...alreadyOpen.slice(index+1)]);
        }
        else{
          setAlreadyOpen([...alreadyOpen.slice(0,index),true,...alreadyOpen.slice(index+1,prevTrueIndex),false,...alreadyOpen.slice(prevTrueIndex+1)]);
        }
      }
      else{
        setFuncName("");
        setAlreadyOpen([...alreadyOpen.slice(0,index),false,...alreadyOpen.slice(index+1)]);
      }
    }
  }
  
  return (
    <>
      <Header style={{backgroundColor: "#434343", height: "100px"}}>
        <Row>
            <Space size={10} style={{marginTop: "15px"}}>
              <Avatar size={64} src="https://imgur.com/ew2Qlci.png"></Avatar>
              <div style={{fontSize: "1cm", color: "#ffffff", fontWeight: "bold"}}>Mr.Chueh</div>
            </Space>
        </Row>
     </Header>
      <Content style={{height: "450px", background: "#f5f5f5"}}>
        <Row>
          <Col md={6} style={{background: "#ffffff", height: "450px"}}>
            <div style={{width: "100%", height: "97%"}}>
              <Button onClick={handleMenu} style={{width: "100%", background: "#ffd666"}}>功能列表{menuPressed ? <CaretUpOutlined/> : <CaretDownOutlined/>}</Button>
              {menuPressed ? <ChuehMenu menuSize={menuSize} handleFuncs={handleFuncs}></ChuehMenu> : <></>}
            </div>
          </Col>
          <Col md={18}>
            {funcName === "Solitaire" ? (menuPressed ? (alreadyOpen[0] ? <Solitaire fadeIn={"chueh_func_in"}></Solitaire> : <Solitaire fadeIn={""}></Solitaire>) : <Solitaire fadeIn={""}></Solitaire>)  : <></>}
            {funcName === "TicTacToe" ? (menuPressed ? (alreadyOpen[1] ? <TicTacToe fadeIn={"chueh_func_in"}></TicTacToe> : <TicTacToe fadeIn={""}></TicTacToe>) : <TicTacToe fadeIn={""}></TicTacToe>) : <></>}
            {funcName === "Covid" ? (menuPressed ? (alreadyOpen[5] ? <Covid fadeIn={"chueh_func_in"}></Covid> : <Covid fadeIn={""}></Covid>) : <Covid fadeIn={""}></Covid>) : <></>}
          </Col>
        </Row>
      </Content>
      <Footer style={{background: "#f5f5f5"}}>

      </Footer>
    </>
  );
}

export default MainPage;
