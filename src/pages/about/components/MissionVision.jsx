import React from 'react';
import { Typography, Row, Col, Card, Button } from 'antd';
import { EyeOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const MissionVision = () => {
    return (

        <div className="mission-vision-section content-wrapper">
            <Row gutter={[24, 24]} align="middle">
                <Col xs={24} md={12} style={{ height: '330px' }} className='mission-vision-content'>
                    <Card style={{ height: '100%' }}>
                        <div>
                            <Title level={4}>Sứ mệnh</Title>
                            <Paragraph>
                                Đào tạo nguồn nhân lực chất lượng cao, nghiên cứu khoa học và chuyển giao công nghệ phục vụ phát triển kinh tế - xã hội của địa phương và đất nước.
                            </Paragraph>
                        </div>
                        <div>
                            <Title level={4}>Tầm nhìn</Title>
                            <Paragraph>
                                Trở thành trường đại học đa ngành, đa lĩnh vực có uy tín trong nước và khu vực, đóng góp tích cực vào sự phát triển bền vững của xã hội.
                            </Paragraph>
                        </div>
                        <Button type="primary" icon={<EyeOutlined />} className="mt-4">
                            Tìm hiểu thêm
                        </Button>
                    </Card>
                </Col>
                <Col xs={24} md={12} style={{ height: '330px', overflow: 'hidden' }}>
                    <img
                        src="https://gocsinhvien.tvu.edu.vn/wp-content/uploads/2021/05/banner-15-nam-tvu-3.jpg"
                        alt="Sứ mệnh và Tầm nhìn Đại học Trà Vinh"
                        width="100%"
                    />
                </Col>
            </Row>
        </div>
    )
}

export default MissionVision