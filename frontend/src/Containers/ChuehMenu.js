import { Menu, PageHeader, Button, Card, Row, Col, Avatar,Space } from "antd"
import { DoubleRightOutlined } from "@ant-design/icons"

export default ({menuSize, handleFuncs}) => {
    return(
        <Menu mode="inline" style={{width: menuSize[0], height: menuSize[1]}} className="chueh_menu_in">
            <Menu.Item style={{height: "17.5%"}} onClick={() => handleFuncs("Solitaire")}>
                <Row align="center" justify="start">
                   <Col md={22} style={{textAlign: "center"}}>接龍</Col>
                   <Col md={2}><DoubleRightOutlined/></Col>
                </Row>
            </Menu.Item>
            <Menu.Item style={{height: "17.5%"}} onClick={() => handleFuncs("TicTacToe")}>
                <Row align="center">
                    <Col md={22} style={{textAlign: "center"}}>井字遊戲</Col>
                    <Col md={2}><DoubleRightOutlined/></Col>
                </Row>
            </Menu.Item>
            <Menu.Item style={{height: "17.5%"}} onClick={() => handleFuncs("Hentai")}>
                <Row align="center">
                    <Col md={22} style={{textAlign: "center"}}>推本子</Col>
                    <Col md={2}><DoubleRightOutlined/></Col>
                </Row>
            </Menu.Item>
            <Menu.Item style={{height: "17.5%"}} onClick={() => handleFuncs("Image")}>
                <Row align="center">
                    <Col md={22} style={{textAlign: "center"}}>推圖</Col>
                    <Col md={2}><DoubleRightOutlined/></Col>
                </Row>
            </Menu.Item>
            <Menu.Item style={{height: "17.5%"}} onClick={() => handleFuncs("Covid")}>
                <Row align="center">
                    <Col md={22} style={{textAlign: "center"}}>每日疫情資訊</Col>
                    <Col md={2}><DoubleRightOutlined/></Col>
                </Row>
            </Menu.Item>
        </Menu>
    )
}