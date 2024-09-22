import React, { useEffect, useMemo, useState } from 'react'
import { Row, Col, Card, List, Typography, Image, Spin, Modal, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectNewsState } from '../../store/selectors/newsSelectors';
import { getNews } from '../../store/slice/newsSlice';
import './News.scss';

const News = () => {
  const dispatch = useDispatch();
  const [selectedItem, setSelectedItem] = useState(null);

  const { data, loading, error } = useSelector(selectNewsState);

  useEffect(() => {
    dispatch(getNews());
  }, []);

  const parsedNewsData = useMemo(() => {
    if (Array.isArray(data) && data.length > 0) {
      return data.map(item => {
        try {
          const parsedContent = JSON.parse(item.contents);
          return {
            ...item,
            content: parsedContent,
            image: parsedContent.image,
            date: parsedContent.date,
            time: parsedContent.time,
          };
        } catch (e) {
          console.error(`Error parsing news item:`, e);
          return null;
        }
      }).filter(item => item !== null);
    }
    return [];
  }, [data]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleModalClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className="news-events-container">
      <div className="news-events-hero">
        <div className="news-events-hero-overlay" />
        <h1>Tin tức và Sự kiện Đại học Trà Vinh</h1>
        <p>
          Cập nhật những tin tức và sự kiện mới nhất tại Đại học Trà Vinh. Từ các hoạt động học thuật, nghiên cứu, đến các sự kiện văn hóa, thể thao, chúng tôi luôn mang đến cho bạn những thông tin hữu ích và kịp thời. Hãy theo dõi để không bỏ lỡ bất kỳ thông tin quan trọng nào về các hoạt động và thành tựu của trường.
        </p>
      </div>

      <Row gutter={[16, 16]}>
        <Col span={16}>
          <Card title="Tin tức mới nhất" loading={loading}>
            <List
              itemLayout="vertical"
              dataSource={parsedNewsData.slice(0, 4)}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Image src={item.image} width={150} height={100} />}
                    title={<a>{item.title}</a>}
                    description={
                      <>
                        <div>{item.date}</div>
                        <Typography.Paragraph ellipsis={{ rows: 2 }}>
                          {item.content.description}
                        </Typography.Paragraph>
                        <Button type="link" onClick={() => handleItemClick(item)}>
                          Xem thêm
                        </Button>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={8} className='news-events-container'>
          <Card title="Sự kiện sắp diễn ra" loading={loading}>
            <List
              itemLayout="vertical"
              dataSource={parsedNewsData.slice(-4)}
              renderItem={(item) => (
                <List.Item onClick={() => handleItemClick(item)} style={{ cursor: 'pointer' }}>
                  <List.Item.Meta
                    avatar={<Image src={item.image} width={100} />}
                    title={<a>{item.title}</a>}
                    description={
                      <>
                        <Typography.Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'Xem thêm' }}>
                          {item.content.description}
                        </Typography.Paragraph>
                        <div>{`${item.date} lúc ${item.time}`}</div>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>

      <Modal
        title={selectedItem?.title}
        visible={!!selectedItem}
        onCancel={handleModalClose}
        footer={null}
        width={1000}
      >
        {selectedItem && (
          <Row gutter={[16, 16]}>
            {selectedItem.image && (
              <Col span={12}>
                <Image src={selectedItem.image} width="100%" />
              </Col>
            )}
            <Col span={selectedItem.image ? 12 : 24}>
              <Typography.Paragraph>{selectedItem.date} {selectedItem.time && `lúc ${selectedItem.time}`}</Typography.Paragraph>
              <div dangerouslySetInnerHTML={{ __html: selectedItem.description }}></div>
            </Col>
          </Row>
        )}
      </Modal>
    </div>
  )
}

export default News