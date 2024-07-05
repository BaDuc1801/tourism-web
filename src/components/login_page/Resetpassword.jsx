import React, { useContext, useState } from 'react';
import { Button, Card, Form, Input, Col } from 'antd';
import './Login.css';
import UserContext from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Resetpassword = () => {
    const { updateUserPassword, email } = useContext(UserContext);
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const nav = useNavigate()
    const handleUpdatePassword = () => {
        if (newPassword !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        updateUserPassword(email, newPassword)
            .then(() => {
                console.log('Password updated successfully.');
            })
            .catch((error) => {
                console.error('Failed to update password:', error.message);
            });
    };

    return (
        <Col span={12} className="input-column">
            <Card className='input-login'>
                <Col className='log-title'>Reset Password</Col>
                <p className='for-p'>Enter your New Password to access your account</p>
                <Form
                    name="basic"
                    style={{ width: 450 }}
                    autoComplete="off"
                >
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your new password!' }]}
                    >
                        <Input.Password
                            className='input-password'
                            placeholder='New Password'
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </Form.Item>

                    <Form.Item
                        name="confirmPassword"
                        rules={[{ required: true, message: 'Please confirm your new password!' }]}
                    >
                        <Input.Password
                            className='input-password'
                            placeholder='Confirm New Password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Form.Item>

                    {error && <p style={{ color: 'red' }}>{error}</p>}

                    <Form.Item>
                        <Button
                            className='loginn-but'
                            type="primary"
                            htmlType="submit"
                            onClick={handleUpdatePassword}
                            style={{ marginTop: 30 }}
                        >
                            Reset Password
                        </Button>
                        <Button
                            className='loginn-but'
                            type="primary"
                            htmlType="submit"
                            onClick={() => {nav('/login')}}>
                            Back to Login
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Col>
    );
};

export default Resetpassword;
