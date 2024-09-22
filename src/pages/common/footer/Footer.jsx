import { Layout, Row, Col, Typography, Divider, Spin } from "antd";
import { FacebookOutlined, YoutubeOutlined, InstagramOutlined } from '@ant-design/icons';
import './Footer.scss'

const { Footer } = Layout;
const { Title, Text } = Typography;

const FooterApp = ({ data, loading }) => {
    return (
        <Footer className="bg-background text-muted-foreground p-6">
            <div className="container">
                <Row gutter={[32, 32]}>
                    <Col xs={24} lg={10}>
                        <div style={{ width: '450px', maxWidth: '100%', margin: '0', display: 'flex', flexDirection: 'column' }}>
                            {loading ? (
                                <Spin />
                            ) : (
                                <>
                                    <img
                                        src={data.logoUrl}
                                        alt="Tra Vinh University"
                                        style={{ width: "fit-content", height: "60px", marginBottom: "20px" }}
                                    />
                                    <Text block>
                                        Email:{" "}
                                        <a href={`mailto:${data.email}`} className="text-primary">
                                            {data.email}
                                        </a>
                                    </Text>
                                    <Text block>
                                        Điện thoại: <span className="text-primary">{data.phone}</span>
                                    </Text>
                                    <Text block>
                                        Địa chỉ: <span className="text-primary">{data.address}</span>
                                    </Text>
                                </>
                            )}
                        </div>
                    </Col>
                    <Col xs={24} lg={14}>
                        <div className="footer-links-container">
                            <Row gutter={[16, 16]}>
                                <Col xs={24} md={8}>
                                    <Title level={4}>Về chúng tôi</Title>
                                    <ul>
                                        <li><a href="#" className="social text-muted-foreground hover:text-primary">Tin tức</a></li>
                                        <li><a href="#" className="social text-muted-foreground hover:text-primary">Sự kiện</a></li>
                                        <li><a href="#" className="social text-muted-foreground hover:text-primary">Tuyển dụng</a></li>
                                        <li><a href="#" className="social text-muted-foreground hover:text-primary">Đảm bảo chất lượng đào tạo</a></li>
                                        <li><a href="#" className="social text-muted-foreground hover:text-primary">Trung tâm khảo thí tiếng anh</a></li>
                                    </ul>
                                </Col>
                                <Col xs={24} md={8}>
                                    <Title level={4}>Truy cập nhanh</Title>
                                    <ul>
                                        <li><a href="#" className="social text-muted-foreground hover:text-primary">Hệ thống Văn bản</a></li>
                                        <li><a href="#" className="social text-muted-foreground hover:text-primary">Hệ thống E-Learning</a></li>
                                        <li><a href="#" className="social text-muted-foreground hover:text-primary">Thư viện</a></li>
                                        <li><a href="#" className="social text-muted-foreground hover:text-primary">HUB</a></li>
                                        <li><a href="#" className="social text-muted-foreground hover:text-primary">E-job</a></li>
                                    </ul>
                                </Col>
                                <Col xs={24} md={8}>
                                    <Title level={4}>Theo dõi</Title>
                                    <ul>
                                        <li>
                                            <a href="#" className="social text-muted-foreground hover:text-primary">
                                                <FacebookOutlined />
                                                <span className="social-name">Facebook</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="social text-muted-foreground hover:text-primary">
                                                <YoutubeOutlined />
                                                <span className="social-name">Youtube</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="social text-muted-foreground hover:text-primary">
                                                <InstagramOutlined />
                                                <span className="social-name">Instagram</span>
                                            </a>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
            <Divider className="mt-6 border-muted" />
            <Text className="copywrite text-center text-sm mt-4 block">
                © 2024 Tra Vinh University. All rights reserved.
            </Text>
        </Footer>
    )
};

export default FooterApp;
