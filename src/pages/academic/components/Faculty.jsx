import React from 'react';
import { Card, Col, Row, Typography, Avatar } from 'antd';
import {
  BookOutlined,
  LaptopOutlined,
  DollarOutlined,
  ExperimentOutlined,
  MedicineBoxOutlined,
  ToolOutlined
} from '@ant-design/icons';

const { Title } = Typography;
const { Meta } = Card;

const Faculty = ({ faculties, onItemClick }) => {
  const icons = [
    <LaptopOutlined style={{ color: '#000000' }} />,
    <DollarOutlined style={{ color: '#000000' }} />,
    <ExperimentOutlined style={{ color: '#000000' }} />,
    <BookOutlined style={{ color: '#000000' }} />,
    <MedicineBoxOutlined style={{ color: '#000000' }} />,
    <ToolOutlined style={{ color: '#000000' }} />
  ];

  const colors = ['#cce0ff', '#ffccff', '#e0ccff', '#ffcccc', '#ccffcc', '#ffd700'];

  return (
    <div className="faculty-container" style={{ backgroundColor: '#fdfdfd', padding: '20px', borderRadius: '10px' }}>
      <Title level={2} style={{ textAlign: 'center', color: '#1890ff' }}>Các khoa đào tạo</Title>
      <Row gutter={[16, 16]}>
        {faculties.map((faculty, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              hoverable
              className="faculty-card"
              onClick={() => onItemClick(faculty)}
              style={{ height: '100%', border: `2px solid ${colors[index % 6]}`, borderRadius: '10px' }}
            >
              <Meta
                avatar={<Avatar icon={icons[index % 6]} style={{ backgroundColor: colors[index % 6], width: '64px', height: '64px' }} />}
                title={<span style={{ color: '#1890ff' }}>{faculty.title}</span>}
                description={
                  <span
                    style={{ color: '#595959' }}
                    onClick={() => onItemClick(faculty)}
                  >
                    Nhấn để xem chi tiết
                  </span>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Faculty