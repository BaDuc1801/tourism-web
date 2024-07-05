import { Col, Row } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'

function Loginpage() {
    return (
        <Row>
            <Col className="login-page-img" span={12}>
                <img src='../src/assets/img/login.png'></img>
            </Col>
            <Outlet />
        </Row>
    )
}

export default Loginpage
