import { Layout, Row, Col, Typography, Divider } from "antd";
import { FacebookOutlined, YoutubeOutlined, InstagramOutlined } from '@ant-design/icons';
import './Footer.scss'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSchool } from "../../../store/slice/schoolSlice";
import { selectSchoolState } from "../../../store/selectors/schoolSelectors";

const { Footer } = Layout;
const { Title, Text } = Typography;

const FooterApp = () => {
    const dispatch = useDispatch();

    const { data, loading, error } = useSelector(selectSchoolState);
    console.log('data', data)

    useEffect(() => {
      dispatch(getSchool());
    }, []); 
    return (
        <Footer className="bg-background text-muted-foreground p-6">
            <div className="container">
                <Row gutter={[16, 16]}>
                    <Col span={8}>
                        <img
                            src="https://www.tvu.edu.vn/wp-content/uploads/2024/07/logotvu14.png"
                            alt="Tra Vinh University"
                            style={{ height: "60px", marginRight: "20px" }}
                        />
                        <br />
                        <Text>
                            Email:{" "}
                            <a href="mailto:daihoctravinh_ad@tvu.edu.vn" className="text-primary">
                                daihoctravinh_ad@tvu.edu.vn
                            </a>
                        </Text>
                        <br />
                        <Text>
                            Điện thoại: <span className="text-primary">0911.202.707</span>
                        </Text>
                        <br />
                        <Text>
                            Địa chỉ: <span className="text-primary">126 Nguyễn Thiện Thành - K4, P5, TP.Trà Vinh, tỉnh Trà Vinh</span>
                        </Text>
                    </Col>
                    <Col span={6}>
                        <Title level={4}>Về chúng tôi</Title>
                        <ul>
                            <li>
                                <a href="#" className="social text-muted-foreground hover:text-primary">
                                    Tin tức
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social text-muted-foreground hover:text-primary">
                                    Sự kiện
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social text-muted-foreground hover:text-primary">
                                    Tuyển dụng
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social text-muted-foreground hover:text-primary">
                                    Đảm bảo chất lượng đào tạo
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social text-muted-foreground hover:text-primary">
                                    Trung tâm khảo thí tiếng anh
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col span={6}>
                        <Title level={4}>Truy cập nhanh</Title>
                        <ul>
                            <li>
                                <a href="#" className="social text-muted-foreground hover:text-primary">
                                    Hệ thống Văn bản
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social text-muted-foreground hover:text-primary">
                                    Hệ thống E-Learning
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social text-muted-foreground hover:text-primary">
                                    Thư viện
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social text-muted-foreground hover:text-primary">
                                    HUB
                                </a>
                            </li>
                            <li>
                                <a href="#" className="social text-muted-foreground hover:text-primary">
                                    E-job
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col span={4}>
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
            <Divider className="mt-6 border-muted" />
            <Text className="copywrite text-center text-sm mt-4">
                © 2024 Tra Vinh University. All rights reserved.
            </Text>
        </Footer>
    )
};

export default FooterApp;
