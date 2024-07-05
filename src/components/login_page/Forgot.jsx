import React, { useContext, useState } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../context/UserContext';

function Forgot() {
    const nav = useNavigate();
    const [username, setUsername] = useState('');
    const { setEmail } = useContext(UserContext);

    const handleFinish = () => {
        setEmail(username);
        // Navigate to the next step or action after setting the email
        nav('/login/forgot/identify');
    };

    return (
        <Col span={12} className="input-column">
            <Card className='input-login'>
                <Col className='log-title'>Forgot Password?</Col>
                <p className='for-p'>No worries, we will send you reset instructions</p>
                <Form
                    name="basic"
                    style={{ width: 450 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                    onFinish={handleFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your email address!' }]}
                    >
                        <Input
                            className='forgot-email'
                            placeholder='Email Address'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button className='loginn-but' type="primary" htmlType="submit">
                            Send Reset Instructions
                        </Button>
                        <Button className='back-login-page' onClick={() => nav('/login')}>
                            <ArrowLeftOutlined /> Back to Login
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Col>
    );
}

export default Forgot;
