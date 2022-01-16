import { useEffect, useState } from "react";
import { Menu, PageHeader, Button, Card, Row, Col, Avatar,Space } from "antd"
import { Header, Content, Footer } from "antd/lib/layout/layout"
import { CaretUpOutlined,CaretDownOutlined } from "@ant-design/icons"

import Cards from "./FuncCards";
import ChuehMenu from "./ChuehMenu";

import "../../node_modules/antd/dist/antd.css"
import "./Chueh.css"

function MainPage() {
  const [menuPressed, setMenuPressed] = useState(false);
  const [menuSize, setMenuSize] = useState([0,0]);
  const [funcName, setFuncName] = useState("");
  const { Covid, HentaiRecommend, ImageRecommend, Solitaire, TicTacToe } = Cards();

  const handleMenu = () => {
    if(!menuPressed){
      setMenuPressed(true);
      setMenuSize(["100%","100%"]);
    }
    else{
      setMenuPressed(false);
      setMenuSize([0,0]);
      setFuncName("");
    }
  }

  const handleFuncs = (str) => {
    if(funcName === "") setFuncName(str);
    else{
      if(str !== funcName) setFuncName(str);
      else setFuncName("")
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
            <Button onClick={handleMenu} style={{width: "100%"}}>功能列表{menuPressed ? <CaretUpOutlined/> : <CaretDownOutlined/>}</Button>
            {menuPressed ? <ChuehMenu menuSize={menuSize} handleFuncs={handleFuncs}></ChuehMenu> : <></>}
          </Col>
          <Col md={18}>
            {funcName === "Solitaire" ? <Solitaire></Solitaire> : <></>}
            {funcName === "TicTacToe" ? <TicTacToe></TicTacToe> : <></>}
            {funcName === "Hentai" ? <HentaiRecommend></HentaiRecommend> : <></>}
            {funcName === "Image" ? <ImageRecommend></ImageRecommend> : <></>}
            {funcName === "Covid" ? <Covid></Covid> : <></>}
          </Col>
        </Row>
      </Content>
      <Footer style={{background: "#ffffff"}}>

      </Footer>
    </>
  );
}

export default MainPage;
