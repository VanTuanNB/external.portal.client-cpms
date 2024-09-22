import { Card, Col, Row, Form, Input, DatePicker, Button } from 'antd'
import React from 'react'

const RegisterForm = () => {

    return (
        <div className="consultation-form-container" style={{
            backgroundImage: 'url("https://imgcdn.tapchicongthuong.vn/tcct-media/huy-tuong/anh-1-benh-vien-truong-dai-hoc-tra-vinh-noi-mang-den-co-hoi-cham-soc-suc-khoe-va-dieu-tri-benh-chat-luong-cho-cong-dong.jpg")',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            padding: '50px 0',
            position: 'relative',
            zIndex: 1,
        }}>
            <div className="consultation-form-overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                zIndex: -1,
            }}></div>
            <Card>
                <div className="flex flex-col md:flex-row items-center">
                    <img
                        alt="Xếp hạng quốc tế"
                        src="https://openui.fly.dev/openui/300x200.svg?text=🌍"
                        className="w-full md:w-1/3 mb-4 md:mb-0 md:mr-6"
                    />
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Thành tựu nổi bật của Đại học Trà Vinh</h2>
                        <h3 className="text-xl font-semibold mb-2">Xếp hạng quốc tế</h3>
                        <p className="mb-2">Top 500 trường đại học tốt nhất châu Á năm 2022</p>
                        <p className="mb-2">Đại học Trà Vinh tự hào là một trong những trường đại học hàng đầu tại Việt Nam, được quốc tế công nhận về chất lượng đào tạo và nghiên cứu.</p>
                        <ul className="list-disc list-inside">
                            <li>Xếp hạng 451-500 trong bảng xếp hạng QS Asia University Rankings 2022</li>
                            <li>Được công nhận đạt chuẩn kiểm định chất lượng giáo dục quốc tế AUN-QA</li>
                            <li>Có hơn 50 chương trình hợp tác quốc tế với các trường đại học uy tín trên thế giới</li>
                        </ul>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default RegisterForm