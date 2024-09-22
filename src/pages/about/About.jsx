import React, { useEffect } from 'react';
import { Typography, Row, Col, Card, Space, Carousel } from 'antd';
import { CommentOutlined, BookOutlined, GlobalOutlined, ToolOutlined, SafetyCertificateOutlined, UserOutlined } from '@ant-design/icons';
import Achievements from './components/Achievements';
import MissionVision from './components/MissionVision';
import History from './components/History';
import CampusInfoAndNews from './components/CampusInfoAndNews';
import './About.scss'
import { useSelector } from 'react-redux';
import { selectSchoolState } from '../../store/selectors/schoolSelectors';


const { Title, Paragraph } = Typography;

const About = () => {
  const { data, loading, error } = useSelector(selectSchoolState);
  console.log('data', data)
  const carouselImages = [
    'https://www.tvu.edu.vn/wp-content/uploads/2021/12/anh-4.jpg',
    'https://bvtdhtv.tvu.edu.vn/wp-content/uploads/2023/09/IMG_6909.jpg',
    'https://imgs.vietnamnet.vn/Images/2017/04/18/22/20170418223718-dh-tra-vinh.jpg',
  ];

  return (
    <div className="about-container">
      <Carousel className='banner' autoplay>
        {carouselImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Tra Vinh University ${index + 1}`} style={{ width: '100%', height: '550px', objectFit: 'cover' }} />
          </div>
        ))}
      </Carousel>

      <div className='content-wrapper'>
        <Title level={2} className='blue'>Giới thiệu về {data && data[0] ? data[0].title : 'Đại học Trà Vinh'}</Title>
        {data?.map((school) => <Paragraph key={school.id}>{school.description}</Paragraph>)}
       
  
      </div>

      <Row gutter={[16, 16]} style={{ marginTop: '24px' }} className="card-services">
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card hoverable>
            <Space direction="vertical" align="center">
              <BookOutlined style={{ fontSize: '32px', color: '#1890ff' }} />
              <Title level={5}>TUYỂN SINH, HƯỚNG NGHIỆP</Title>
            </Space>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card hoverable>
            <Space direction="vertical" align="center">
              <SafetyCertificateOutlined style={{ fontSize: '32px', color: '#52c41a' }} />
              <Title level={5}>KIỂM ĐỊNH CHẤT LƯỢNG</Title>
            </Space>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card hoverable>
            <Space direction="vertical" align="center">
              <GlobalOutlined style={{ fontSize: '32px', color: '#faad14' }} />
              <Title level={5}>TUYỂN SINH QUỐC TẾ</Title>
            </Space>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card hoverable>
            <Space direction="vertical" align="center">
              <UserOutlined style={{ fontSize: '32px', color: '#eb2f96' }} />
              <Title level={5}>VIỆC LÀM SINH VIÊN</Title>
            </Space>
          </Card>
        </Col>
      </Row>
      <History />
      <MissionVision />
      <Achievements />
      <CampusInfoAndNews />
    </div>
  );
};

export default About;