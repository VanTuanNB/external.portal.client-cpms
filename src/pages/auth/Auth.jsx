import React, { useState, useEffect } from 'react';
import { Tabs, Form, Input, DatePicker, Button, Row, Col, Typography, Card, Avatar } from 'antd';
import { useLocation } from 'react-router-dom';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, HomeOutlined, CalendarOutlined } from '@ant-design/icons';
import Login from './Login';
import Register from './Register';

const { Title, Paragraph } = Typography;

const Auth = () => {
  const [activeTab, setActiveTab] = useState('login');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/login') {
      setActiveTab('login');
    } else if (path === '/register') {
      setActiveTab('register');
    }
  }, [location]);

  return (
    <div style={{ margin: '0 auto', padding: '40px 20px' }}>
      <Row gutter={24} align="middle">
        <Col xs={24} md={12}>
          <Card style={{ textAlign: 'center', backgroundColor: '#f0f7ff', border: 'none' }}>
            <Avatar size={100} src="https://upload.wikimedia.org/wikipedia/vi/c/ce/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_Tr%C3%A0_Vinh.png" />
            <Title level={2} style={{ marginTop: '20px', color: '#1890ff' }}>Trường đại học Trà Vinh</Title>
            <Paragraph>
              Chào mừng bạn đến với cổng thông tin của Đại học Trà Vinh. Hãy đăng nhập hoặc đăng ký để trải nghiệm đầy đủ các tính năng của chúng tôi.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card hoverable style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <Tabs
              activeKey={activeTab}
              onChange={setActiveTab}
              items={[
                {
                  label: 'Đăng nhập',
                  key: 'login',
                  children: <Login />,
                },
                // {
                //   label: 'Đăng ký',
                //   key: 'register',
                //   children: <Register />,
                // },
              ]}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Auth;