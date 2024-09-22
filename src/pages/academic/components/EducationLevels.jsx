import React, { useEffect } from 'react'
import { Row, Col, Card, Typography, Button } from 'antd'
import { ReadOutlined, BookOutlined, AuditOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const EducationLevels = ({ curriculum, onItemClick }) => {
  const icons = [<ReadOutlined />, <BookOutlined />, <AuditOutlined />]
  const colors = ['#52c41a', '#ff9e73', '#722ed1']

  const getIcon = (index) => {
    return icons[index % 3]
  }

  const getColor = (index) => {
    return colors[index % 3]
  }

  return (
    <div className="education-levels-container">
      <Title level={2} className="blue" style={{ textAlign: 'center', color: '#1890ff' }}>Chương trình đào tạo</Title>
      <Row gutter={[24, 24]} className="education-levels">
        {curriculum.map((item, index) => (
          <Col key={index} xs={24} sm={8}>
            <Card
              hoverable
              className="education-level-card"
              style={{ borderTop: `4px solid ${getColor(index)}` }}
              onClick={() => onItemClick(item)}
            >
              <div className="icon-wrapper" style={{ color: getColor(index) }}>
                {React.cloneElement(getIcon(index), { style: { fontSize: '48px' } })}
              </div>
              <Title level={4} style={{ color: getColor(index), marginTop: '16px' }}>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
              <Button 
                type="primary" 
                style={{ backgroundColor: getColor(index), borderColor: getColor(index) }}
                onClick={(e) => {
                  e.stopPropagation();
                  onItemClick(item);
                }}
              >
                Tìm hiểu thêm
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default EducationLevels