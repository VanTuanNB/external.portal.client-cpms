import { Card, Col, Row, Form, Input, DatePicker, Button, Typography, message } from 'antd'
import { admissionRegister } from '../../../store/slice/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom"

const { Title } = Typography;

const RegisterForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form] = Form.useForm()

    const onFinish = async (values) => {
        console.log('Form values:', values)
        try {
            await dispatch(admissionRegister(values)).unwrap();
            message.success('Đăng ký thành công!');
            form.resetFields();
            navigate('/');
        } catch (error) {
            console.log('error', error)
            message.error('Đăng ký không thành công, Vui lòng kiểm tra lại email, có thể email đã được đăng ký!');
        }
    }

    return (
        <div className="consultation-form-container" style={{
            backgroundImage: 'url("https://imgcdn.tapchicongthuong.vn/tcct-media/huy-tuong/anh-1-benh-vien-truong-dai-hoc-tra-vinh-noi-mang-den-co-hoi-cham-soc-suc-khoe-va-dieu-tri-benh-chat-luong-cho-cong-dong.jpg")',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            padding: '50px 0',
            margin: '40px 0',
            position: 'relative',
            zIndex: 1,
            borderRadius: '10px',
            overflow: 'hidden',
        }}>
            <div className="consultation-form-overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                zIndex: -1,
            }}></div>
            <Row gutter={[16, 16]} className="mt-8">
                <Col span={24}>
                    <Card style={{ maxWidth: '800px', margin: '0 auto', backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                        <Title className='blue' level={3} style={{ textAlign: 'center', marginBottom: '20px' }}>
                            ĐĂNG KÝ TUYỂN SINH TRỰC TUYẾN 24/7
                        </Title>
                        <Form
                            form={form}
                            name="register_form"
                            onFinish={onFinish}
                            layout="vertical"
                        >
                            <Row gutter={[16, 0]}>
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="name"
                                        label="Họ và tên"
                                        rules={[{ required: true, message: 'Vui lòng nhập họ và tên!' }]}
                                    >
                                        <Input placeholder="Nhập họ và tên" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="birthday"
                                        label="Ngày sinh"
                                        rules={[{ required: true, message: 'Vui lòng chọn ngày sinh!' }]}
                                    >
                                        <DatePicker style={{ width: '100%' }} />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="email"
                                        label="Email"
                                        rules={[
                                            { required: true, message: 'Vui lòng nhập email!' },
                                            { type: 'email', message: 'Email không hợp lệ!' }
                                        ]}
                                    >
                                        <Input placeholder="Nhập địa chỉ email" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="phone"
                                        label="Số điện thoại"
                                        rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                                    >
                                        <Input placeholder="Nhập số điện thoại" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="address"
                                        label="Tỉnh/Thành phố"
                                        rules={[{ required: true, message: 'Vui lòng nhập tỉnh/thành phố!' }]}
                                    >
                                        <Input placeholder="Nhập tỉnh/thành phố" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="major"
                                        label="Ngành học quan tâm"
                                        rules={[{ required: true, message: 'Vui lòng nhập ngành học quan tâm!' }]}
                                    >
                                        <Input placeholder="Nhập ngành học quan tâm" />
                                    </Form.Item>
                                </Col>
                                <Col span={24}>
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" block>
                                            Đăng ký tư vấn
                                        </Button>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default RegisterForm