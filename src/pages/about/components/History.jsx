import React from 'react';
import { Typography, Row, Col, Button, Timeline } from 'antd';
import { HistoryOutlined } from '@ant-design/icons';

const { Title } = Typography;

const History = () => {
    return (

        <div className="development-history content-wrapper">
            <Row gutter={[24, 24]} align="middle">
                <Col xs={24} md={12} style={{ height: '390px' }}>
                    <img
                        src="https://www.tvu.edu.vn/wp-content/uploads/2021/05/tvu-15-nam-dai-hoc.jpg"
                        alt="Lịch sử phát triển Đại học Trà Vinh"
                        width="100%"
                        height="100%"
                        style={{ objectFit: 'cover' }}
                    />
                </Col>
                <Col className='history-content' xs={24} md={12} style={{ height: '390px', overflowY: 'auto' }}>
                    <Title className='blue' level={2}>Lịch sử phát triển</Title>
                    <Timeline>
                        <Timeline.Item color="green">2006: Thành lập Trường Đại học Trà Vinh</Timeline.Item>
                        <Timeline.Item color="green">2010: Mở rộng quy mô đào tạo, thêm nhiều ngành học mới</Timeline.Item>
                        <Timeline.Item color="green">2015: Đạt chuẩn kiểm định chất lượng giáo dục quốc gia</Timeline.Item>
                        <Timeline.Item color="green">2020: Trở thành một trong những trường đại học hàng đầu khu vực ĐBSCL</Timeline.Item>
                        <Timeline.Item color="blue">Hiện tại: Tiếp tục phát triển và nâng cao chất lượng đào tạo</Timeline.Item>
                    </Timeline>
                    <Button type="primary" icon={<HistoryOutlined />}>Xem chi tiết lịch sử</Button>
                </Col>
            </Row>
        </div>
    )
}

export default History