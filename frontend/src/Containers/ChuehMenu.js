import { Menu, PageHeader, Button, Card, Row, Col, Avatar,Space } from "antd"
import { DoubleRightOutlined } from "@ant-design/icons"

export default ({menuSize, handleFuncs}) => {
    const funcList = [
        { eng: "Solitaire", zh: "接龍" },
        { eng: "TicTacToe", zh: "井字遊戲" },
        { eng: "Hentai", zh: "推本子" },
        { eng: "Image", zh: "推圖" },
        { eng: "Eat", zh: "吃什麼" },
        { eng: "Covid", zh: "每日疫情資訊" }
    ]
    return(
        <Menu mode="inline" style={{width: menuSize[0], height: menuSize[1]}} className="chueh_menu_in">
            {funcList.map((func,index) => 
                <Menu.Item key={index} style={{height: "17.5%", background: "linear-gradient(#ffffff 0%, #f7f7f7 100%)"}} onClick={() => handleFuncs(index, func.eng)}>
                    <Row align="center" justify="start">
                    <Col md={22} style={{textAlign: "center"}}>{func.zh}</Col>
                    <Col md={2}><DoubleRightOutlined/></Col>
                    </Row>
                </Menu.Item>)
            }
        </Menu>
    )
}