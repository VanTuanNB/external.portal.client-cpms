import React, { useState } from 'react';
import { Layout, Menu, Button, Dropdown, Avatar, Space, Drawer } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import { selectAuthState } from '../../../store/selectors/authSelector';

const { Header } = Layout;

const HeaderApp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const { user } = useSelector(selectAuthState);

  const [drawerVisible, setDrawerVisible] = useState(false);
  
  const accessToken = Cookies.get('accessToken');

  const handleLogout = () => {
    Cookies.remove('accessToken');
    navigate('/login');
  };

  const menuItems = [
    {
      key: '/about',
      label: <Link to="/about">Về trường</Link>,
    }, {
      key: '/academic',
      label: <Link to="/academic">Đào tạo</Link>,
    }, {
      key: '/admission',
      label: <Link to="/admission">Tuyển sinh</Link>,
    }, {
      key: '/news-events',
      label: <Link to="/news-events">Tin tức & sự kiện</Link>,
    },
  ];

  if (accessToken) {
    menuItems.push({
      key: '/my-courses',
      label: <Link to="/my-courses">Khóa học</Link>,
    });
  }

  const renderMenu = () => (
    <Menu
      mode={isMobile ? "vertical" : "horizontal"}
      selectedKeys={[location.pathname]}
      style={isMobile ? {} : { flex: 1, justifyContent: 'center' }}
      items={menuItems}
    />
  );

  const renderAuthButtons = () => (
    accessToken ? (
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item key="logout" onClick={handleLogout}>
              Đăng xuất
            </Menu.Item>
          </Menu>
        }
        trigger={['click']}
      >
        <Space style={{ cursor: 'pointer' }}>
          <Avatar src="https://i.pinimg.com/564x/79/94/27/7994271a756f2a8e7d1d8e5fc77c47e9.jpg" />
          <span>{user?.name}</span>
          <DownOutlined />
        </Space>
      </Dropdown>
    ) : (
      <>
        <Button type="primary" onClick={() => navigate('/login')} style={{ marginRight: '10px' }}>Đăng nhập</Button>
      </>
    )
  );

  return (
    <Layout>
      <Header style={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://www.tvu.edu.vn/wp-content/uploads/2024/07/logotvu14.png" alt="Tra Vinh University" style={{ height: '40px', marginRight: '20px' }} />
        </div>

        {/* Navigation Menu */}
        {isMobile ? (
          <>
            <Button icon={<MenuOutlined />} onClick={() => setDrawerVisible(true)} />
            <Drawer
              title="Menu"
              placement="right"
              onClose={() => setDrawerVisible(false)}
              visible={drawerVisible}
            >
              {renderMenu()}
              <div style={{ marginTop: '20px' }}>
                {renderAuthButtons()}
              </div>
            </Drawer>
          </>
        ) : (
          <>
            {renderMenu()}
            <div>
              {renderAuthButtons()}
            </div>
          </>
        )}
      </Header>
    </Layout>
  );
};

export default HeaderApp;
