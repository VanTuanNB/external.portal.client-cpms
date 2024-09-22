import React from 'react'
import { Row, Col, Card, Typography } from 'antd'

const { Title } = Typography;

const StudentLife = () => {
    return (
        <Row gutter={[16, 16]} className="mt-8">
            <Col span={24}>
                <Card>
                    <Title className='blue' level={2} style={{ textAlign: 'center', marginBottom: '0px' }}>
                        Đời sống sinh viên tại Đại học Trà Vinh
                    </Title>
                    <p className="text-center mb-4">Khám phá cuộc sống đa dạng và phong phú của sinh viên tại trường Đại học Trà Vinh, nơi bạn sẽ có cơ hội phát triển toàn diện cả về học thuật lẫn kỹ năng sống.</p>
                    <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={8}>
                            <Card
                                hoverable
                                cover={
                                    <div style={{ height: '200px', overflow: 'hidden' }}>
                                        <img
                                            alt="Ký túc xá"
                                            src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_310,h_226/https://www.tvu.edu.vn/wp-content/uploads/2022/09/ktx-tvu-2.jpg"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                }
                            >
                                <Card.Meta title="Ký túc xá" description="Thông tin về chỗ ở và tiện ích cho sinh viên. Môi trường sống an toàn, tiện nghi với đầy đủ các dịch vụ hỗ trợ." />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <Card
                                hoverable
                                cover={
                                    <div style={{ height: '200px', overflow: 'hidden' }}>
                                        <img
                                            alt="Hoạt động ngoại khóa"
                                            src="https://fl.tvu.edu.vn/images/resized/images/sampledata/slideshow/hopmatchiase_2022_800_400.jpg"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                }
                            >
                                <Card.Meta title="Hoạt động ngoại khóa" description="Các câu lạc bộ và sự kiện sinh viên. Cơ hội tham gia vào các hoạt động đa dạng, phát triển kỹ năng mềm và mở rộng mạng lưới quan hệ." />
                            </Card>
                        </Col>
                        <Col xs={24} sm={12} md={8}>
                            <Card
                                hoverable
                                cover={
                                    <div style={{ height: '200px', overflow: 'hidden' }}>
                                        <img
                                            alt="Cơ sở vật chất"
                                            src="https://www.tvu.edu.vn/wp-content/uploads/2019/10/benh_vien_dhtv.png"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    </div>
                                }
                            >
                                <Card.Meta title="Cơ sở vật chất" description="Thư viện, phòng thí nghiệm và các tiện ích khác. Trang thiết bị hiện đại, đáp ứng nhu cầu học tập và nghiên cứu của sinh viên." />
                            </Card>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}

export default StudentLife