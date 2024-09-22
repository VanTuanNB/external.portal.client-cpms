import React from 'react';
import { Typography, Collapse, Empty } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import moment from 'moment';

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

export const TrainingPrograms = ({ courses }) => {
  return (
    <div className="training-programs-container mt-6">
      <Title level={2} className="blue" style={{ textAlign: 'center', color: '#1890ff' }}>
        Khám phá khóa học
      </Title>
      {courses.length === 0 ? (
        <Empty
          description="Không có khóa học nào"
          style={{ margin: '20px 0' }}
        />
      ) : (
        <Collapse 
          accordion 
          defaultActiveKey={courses[0].id} 
          className="training-programs-collapse"
          style={{
            background: 'transparent',
            border: 'none'
          }}
        >
          {courses.map(course => (
            <Panel 
              header={
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#34495e',
                  fontWeight: 'bold'
                }}>
                  <BookOutlined style={{ marginRight: '10px', color: '#3498db' }} />
                  {course.title}
                </div>
              } 
              key={course.id} 
              className="training-programs-panel"
              style={{
                marginBottom: '15px',
                border: '1px solid #bdc3c7',
                borderRadius: '8px',
                overflow: 'hidden'
              }}
            >
              <Paragraph><strong style={{color: '#2980b9'}}>Mã khóa học:</strong> {course.code}</Paragraph>
              <Paragraph><strong style={{color: '#2980b9'}}>Thời gian bắt đầu:</strong> {moment(course.durationStart).format('DD/MM/YYYY')}</Paragraph>
              <Paragraph><strong style={{color: '#2980b9'}}>Thời gian kết thúc:</strong> {moment(course.durationEnd).format('DD/MM/YYYY')}</Paragraph>
              <Paragraph><strong style={{color: '#2980b9'}}>Số lượng:</strong> {course.quantity}</Paragraph>
              <Paragraph><strong style={{color: '#2980b9'}}>Mô tả:</strong> {course.description}</Paragraph>
            </Panel>
          ))}
        </Collapse>
      )}
    </div>
  )
}
