import { Card, Col, Row, Typography } from 'antd'
import React from 'react'

const { Title, Paragraph } = Typography;

const PopularMajors = ({ majorData }) => {
    return (
        <div className="popular-majors-container" style={{ background: '#fdfdfd', padding: '40px 0', borderRadius: '10px', overflow: 'hidden' }}>
            <Row justify="center">
                <Col span={22}>
                    <Title className='blue' level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
                        Các ngành học nổi bật tại Đại học Trà Vinh
                    </Title>
                    <Row gutter={[24, 24]}>
                        {majorData.slice(0, 6).map((major, index) => (
                            <Col xs={24} sm={12} md={8} key={index}>
                                <Card
                                    hoverable
                                    style={{ height: '100%' }}
                                    cover={
                                        <img src={major.thumbnailUrl} alt={major.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                    }
                                >
                                    <Card.Meta 
                                        title={<Title level={4}>{major.title}</Title>}
                                        description={
                                            <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: '' }}>
                                                {major.description}
                                            </Paragraph>
                                        }
                                    />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default PopularMajors
