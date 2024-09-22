import React from 'react'
import { Form, Input, DatePicker, Button, message } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, HomeOutlined, CalendarOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { registerUser } from '../../store/slice/authSlice';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        try {
            const resultAction = await dispatch(registerUser(values));
            if (registerUser.fulfilled.match(resultAction) && resultAction.payload.message !== 'User exits') {
                const userId = resultAction.payload.data.userId;
                Cookies.set('userId', userId);

                // Fetch user details
                try {
                    await dispatch(getUserById(userId));
                    message.success('Đăng ký thành công!');
                    form.resetFields();
                    navigate('/my-courses');
                } catch (error) {
                    console.error('Error fetching user details:', error);
                }
            } else {
                message.error('Tài khoản đã tồn tại!');
            }
        } catch (error) {
            message.error(error.message || 'Đăng ký thất bại.');
        }
    };

    // const onFinish = async (values) => {
    //     try {
    //         const resultAction = await dispatch(registerUser(values));
    //         console.log('resultAction', resultAction)
    //         if (registerUser.fulfilled.match(resultAction) && resultAction.payload.message !== 'User exits') {
    //             message.success('Đăng ký thành công!');
    //             form.resetFields();
    //             navigate('/my-courses');
    //         } else {
    //             message.error('Tài khoản đã tồn tại!');
    //         }
    //     } catch (error) {
    //         message.error(error.message || 'Đăng ký thất bại.');
    //     }
    // };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Vui lòng nhập email hợp lệ!' }]}>
        <Input prefix={<MailOutlined />} placeholder="Email" />
      </Form.Item>
      <Form.Item name="name" rules={[{ required: true, message: 'Vui lòng nhập tên của bạn!' }]}>
        <Input prefix={<UserOutlined />} placeholder="Họ và tên" />
      </Form.Item>
      <Form.Item name="birthday" rules={[{ required: true, message: 'Vui lòng chọn ngày sinh!' }]}>
        <DatePicker style={{ width: '100%' }} placeholder="Ngày sinh" suffixIcon={<CalendarOutlined />} />
      </Form.Item>
      <Form.Item name="phone" rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}>
        <Input prefix={<PhoneOutlined />} placeholder="Số điện thoại" />
      </Form.Item>
      <Form.Item name="address" rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}>
        <Input.TextArea prefix={<HomeOutlined />} placeholder="Địa chỉ" autoSize={{ minRows: 2, maxRows: 6 }} />
      </Form.Item>
      <Form.Item name="password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>
        <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ width: '100%', height: '40px', borderRadius: '20px' }}>
          Đăng ký
        </Button>
      </Form.Item>
    </Form>
  )
}

export default Register