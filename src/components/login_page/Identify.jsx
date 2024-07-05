import { Button, Card, Col, Input } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Identify() {
    const nav = useNavigate()
    return (
        <Col span={12}>
            <Card className='identify-fix'>
                <Col className='log-title'>Enter Verification Code</Col>
                <p className='for-p'>We have just sent a verification code to your email</p>
                <Col className='code-input'>
                    <Input className='pin' />
                    <Input className='pin' />
                    <Input className='pin' />
                    <Input className='pin' />
                </Col>
                <Button className='identify-but' type="primary" htmlType="submit" onClick={()=>{nav('/login/forgot/identify/resetpassword')}}>
                    Verify
                </Button>
                <br></br>
                <Button className= 'resend-but' htmlType="submit" >
                    Resend Code
                </Button>
            </Card>
        </Col>
    )
}

export default Identify
