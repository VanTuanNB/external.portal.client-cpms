import React from 'react';
import { Typography, Row, Col, Carousel, Button, List } from 'antd';
import { GlobalOutlined, TrophyOutlined, CheckCircleOutlined, ExperimentOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Achievements = () => {
    return (

        <div className="outstanding-achievements content-wrapper">
            <Row gutter={[24, 24]} align="middle">
                <Col xs={24} md={12} style={{height: '390px', overflow: 'hidden'}}>
                    <Carousel autoplay>
                        <div>
                            <img
                                src="https://www.tvu.edu.vn/wp-content/uploads/2019/11/IMG_1394.jpg"
                                alt="Thành tựu 1"
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div>
                            <img
                                src="https://nnts.tvu.edu.vn/wp-content/uploads/2016/04/IMG_2875.jpg"
                                alt="Thành tựu 2"
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div>
                            <video
                                controls
                                style={{ width: '100%', height: 'auto' }}
                                poster="https://xdcs.cdnchinhphu.vn/446259493575335936/2023/7/24/tv6-16901904543291846040053.jpg"
                            >
                                <source src="https://www.youtube.com/watch?v=ladvQw6OcoU" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </Carousel>
                </Col>
                <Col xs={24} md={12} style={{height: '390px'}} className='achievements-content'>
                    <Title className='blue' level={2}>Thành tựu nổi bật</Title>
                    <List
                        itemLayout="horizontal"
                        dataSource={[
                            {
                                title: 'Kiểm định chất lượng',
                                description: 'Đạt chuẩn kiểm định chất lượng giáo dục quốc gia năm 2015',
                                icon: <CheckCircleOutlined style={{ fontSize: '24px', color: '#52c41a' }} />
                            },
                            {
                                title: 'Nghiên cứu khoa học',
                                description: 'Nhiều công trình nghiên cứu được công bố quốc tế',
                                icon: <ExperimentOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
                            },
                            {
                                title: 'Hợp tác quốc tế',
                                description: 'Thiết lập quan hệ hợp tác với nhiều trường đại học trên thế giới',
                                icon: <GlobalOutlined style={{ fontSize: '24px', color: '#722ed1' }} />
                            }
                        ]}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={item.icon}
                                    title={<Typography.Text strong>{item.title}</Typography.Text>}
                                    description={item.description}
                                />
                            </List.Item>
                        )}
                    />
                    <Button type="primary" icon={<TrophyOutlined />} className="mt-4">
                        Xem tất cả thành tựu
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default Achievements