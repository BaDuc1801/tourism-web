import React, { useContext } from 'react';
import { Button, Card, Checkbox, Col, Form, Input, Row, message } from 'antd';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import UserContext from '../../context/UserContext';

const Login = () => {
    const { setIsAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();
    const { users, setAccName } = useContext(UserContext)
    const handleLogin = (values) => {
        for (let i = 0; i < users.length; i++) {
            if (values.username === users[i].username && values.password === users[i].password) {
                setIsAuthenticated(true);
                setAccName(users[i].accname)
                localStorage.setItem("isAuthenticated", true);
                localStorage.setItem("accName", users[i].accname);
                navigate("/", { replace: true });
            }
        }
    };
    return (
        <Col span={12} className="input-column">
            <Card className='input-login'>
                <Col className='login-title'>Welcome!</Col>
                <Form
                    name="basic"
                    style={{ width: 450 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                    onFinish={handleLogin}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input className='input-email' placeholder='Email Address' />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password className='input-password' placeholder='Password' />
                    </Form.Item>


                    <Form.Item>
                        <Row className='login-flex'><Checkbox style={{ fontSize: 16 }}>Remember me</Checkbox> <Link to='/login/forgot'>Forget Password</Link></Row>
                        <Button className='loginn-but' type="primary" htmlType="submit" >
                            Log In
                        </Button>
                        <Row className='login-flex'><p>Don’t have an account yet?</p><Link to='/signup'>Create account</Link></Row>
                        <Row className='login-flex'></Row><Link to='/' onClick={() => {setIsAuthenticated(false)}}>Sign in without an account</Link>
                    </Form.Item>
                </Form>
            </Card>
        </Col>
    )
};

export default Login;