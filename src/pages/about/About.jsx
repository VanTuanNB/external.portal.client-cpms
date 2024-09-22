import React from 'react';
import { Typography, Row, Col, Card, Space, Carousel } from 'antd';
import { CommentOutlined, BookOutlined, GlobalOutlined, ToolOutlined, SafetyCertificateOutlined, UserOutlined } from '@ant-design/icons';
import Achievements from './components/Achievements';
import MissionVision from './components/MissionVision';
import History from './components/History';
import CampusInfoAndNews from './components/CampusInfoAndNews';
import './About.scss'

const { Title, Paragraph } = Typography;

const About = () => {
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
        <Title level={2} className='blue'>Giới thiệu về Đại học Trà Vinh</Title>
        <Paragraph>
          Đại học Trà Vinh là một trường đại học công lập tại tỉnh Trà Vinh, Việt Nam. Được thành lập vào năm 2006,
          trường đã nhanh chóng phát triển và trở thành một trong những cơ sở giáo dục đại học hàng đầu trong khu vực.
        </Paragraph>
        <Paragraph>
          Với sứ mệnh đào tạo nguồn nhân lực chất lượng cao, Đại học Trà Vinh không ngừng đổi mới và nâng cao chất lượng giáo dục.
          Trường cung cấp đa dạng các chương trình đào tạo từ bậc đại học đến sau đại học, đáp ứng nhu cầu học tập và nghiên cứu của sinh viên.
        </Paragraph>
        <Paragraph>
          Đại học Trà Vinh tự hào với đội ngũ giảng viên giàu kinh nghiệm và tâm huyết, cơ sở vật chất hiện đại, và môi trường học tập năng động.
          Trường cũng chú trọng phát triển các hoạt động nghiên cứu khoa học, hợp tác quốc tế, và liên kết với doanh nghiệp,
          tạo điều kiện tốt nhất cho sinh viên phát triển toàn diện và sẵn sàng cho sự nghiệp tương lai.
        </Paragraph>
        <Paragraph>
          Với những thành tựu đạt được trong giáo dục và đào tạo, Đại học Trà Vinh đã khẳng định vị thế của mình
          không chỉ trong khu vực Đồng bằng sông Cửu Long mà còn trên toàn quốc, đóng góp tích cực vào sự phát triển
          kinh tế - xã hội của đất nước.
        </Paragraph>
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