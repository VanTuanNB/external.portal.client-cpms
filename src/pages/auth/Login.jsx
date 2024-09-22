import { Form, Input, Button, message } from 'antd'
import React from 'react'
import { MailOutlined, LockOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/slice/authSlice';
import { selectAuthState } from '../../store/selectors/authSelector';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading } = useSelector(selectAuthState);

    const onFinish = async (values) => {
        try {
            const result = await dispatch(loginUser(values)).unwrap();
            message.success('Đăng nhập thành công!');
            navigate('/my-courses');
        } catch (error) {
            message.error('Đăng nhập không thành công!');
        }
    };

    return (
        <Form onFinish={onFinish} layout="vertical">
            <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Vui lòng nhập email hợp lệ!' }]}>
                <Input prefix={<MailOutlined />} placeholder="Email" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>
                <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" loading={isLoading} style={{ width: '100%', height: '40px', borderRadius: '20px' }}>
                    Đăng nhập
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Login