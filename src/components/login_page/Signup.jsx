import { Button, Card, Checkbox, Col, Form, Input, Row } from 'antd'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../../context/UserContext';
import { AuthContext } from '../../context/AuthContext';

const Signup = () => {
    const navigate = useNavigate();
    const { users, setAccName, addUser } = useContext(UserContext)
    const {setIsAuthenticated} = useContext(AuthContext)
    const handleLogin = (values) => {
        const newUser = {
            username: values.username,
            password: values.password,
            accname: values.accname
        };
        addUser(newUser);
        setAccName(values.accname);
        setIsAuthenticated(false)
        navigate('/login')
    };

    return (
        <Row>
            <Col className="login-page-img" span={12}>
                <img src='../src/assets/img/signup.png'></img>
            </Col>
            <Col span={12} className="input-column">
                <Card className='input-login'>
                    <Col className='log-title'>Hi, Get Started Now!</Col>
                    <p className='for-p'>Enter details to create your Travel Pulse account</p>
                    <Form
                        name="basic"
                        style={{ width: 450 }}
                        initialValues={{ remember: true }}
                        autoComplete="off"
                        onFinish={handleLogin}
                    >
                       <Form.Item
                            name="accname"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input className='input-email' placeholder='Full Name' style={{marginTop:40}}/>
                        </Form.Item>

                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input className='input-email' placeholder='Email Address'/>
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password className='input-password' placeholder='Password' />
                        </Form.Item>

                        <Form.Item
                            name="c-password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password className='input-password' placeholder='Confirm Password' />
                        </Form.Item>

                        <Form.Item>
                            <Button className='loginn-but' type="primary" htmlType="submit" >
                                Sign Up
                            </Button>
                            <Row className='login-flex'><p>Already have an account?</p><Link to='/login'>Sign in to account</Link></Row>
                        </Form.Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}

export default Signup