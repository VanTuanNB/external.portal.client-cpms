import React from 'react';
import { Col, Card, Carousel, Typography, Button, Row, List, Image } from 'antd';
import { EnvironmentOutlined, ReadOutlined } from '@ant-design/icons';

const { Paragraph } = Typography;

const CampusInfoAndNews = () => {
  return (
    <div className="campus-info-and-news">
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <Card className='blue' title="Khuôn viên Đại học Trà Vinh" bordered={false}>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <img
                  src="https://photo-cms-tpo.epicdn.me/w1000/Uploaded/2023/ttf-ztmfxuzt/2022_12_27/ghgfhgffhhf-9791.jpeg"
                  alt="Thư viện"
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
              </Col>
              <Col span={8}>
                <img
                  src="https://www.tvu.edu.vn/wp-content/uploads/2021/12/dh-tra-vinh-tiep-tuc-1-1.jpg"
                  alt="Phòng thí nghiệm"
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
              </Col>
              <Col span={8}>
                <img
                  src="https://photo-cms-tpo.epicdn.me/w1000/Uploaded/2023/ttf-ztmfxuzt/2022_12_27/313406678-489313896562722-7954952729823156921-n-20.jpeg"
                  alt="Khu thể thao"
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
              </Col>
              <Col span={24}>
                <Paragraph className="mt-4">
                  Đại học Trà Vinh tự hào với khuôn viên rộng lớn, hiện đại và xanh mát.
                  Trường có đầy đủ cơ sở vật chất phục vụ học tập, nghiên cứu và sinh hoạt
                  cho sinh viên, bao gồm thư viện, phòng thí nghiệm, khu thể thao, ký túc xá,
                  và nhiều tiện ích khác.
                </Paragraph>
                <Button type="primary" icon={<EnvironmentOutlined />}>
                  Khám phá khuôn viên
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col xs={24} md={12} className='news-content'>
          <Card className='blue' title="Tin tức nổi bật trong tuần" bordered={false}>
            <List
              itemLayout="vertical"
              dataSource={[
                {
                  title: 'Đại học Trà Vinh tổ chức Hội nghị Khoa học Quốc tế 2023',
                  description: 'Sự kiện quy tụ hơn 200 nhà khoa học từ 20 quốc gia',
                  date: '15/05/2023',
                  image: 'https://www.tvu.edu.vn/wp-content/uploads/2023/02/ret-2023-tvu-scaled.jpg'
                },
                {
                  title: 'Đại học Trà Vinh mở rộng chương trình trao đổi sinh viên quốc tế',
                  description: 'Cơ hội học tập và trải nghiệm tại các trường đại học hàng đầu thế giới',
                  date: '05/05/2023',
                  image: 'https://baocantho.com.vn/image/fckeditor/upload/2024/20240208/images/TRA%20VINH%202%20copy.webp'
                }
              ]}
              renderItem={(item) => (
                <List.Item
                  extra={
                    <Image
                      width={150}
                      height={100}
                      alt={item.title}
                      src={item.image}
                    />
                  }
                >
                  <List.Item.Meta
                    title={<a href="#">{item.title}</a>}
                    description={item.description}
                  />
                  <div>{item.date}</div>
                </List.Item>
              )}
            />
            <Button type="primary" icon={<ReadOutlined />} className="mt-4" onClick={() => {
              window.location.href = '/news-events';
            }}>
              Xem tất cả tin tức
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CampusInfoAndNews;