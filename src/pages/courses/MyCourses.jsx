import { Button, Table, Modal, Typography, Tabs, Tag, Empty } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectAuthState } from '../../store/selectors/authSelector';

const { Title } = Typography;

const MyCourses = ({ activeCourses, registeringCourses }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { isLoading } = useSelector(selectAuthState);

  const showModal = (course) => {
    setSelectedCourse(course);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const getStatusTag = (status) => {
    switch (status) {
      case 1:
        return <Tag color="orange">Đang chờ duyệt</Tag>;
      case 2:
        return <Tag color="blue">Đang học</Tag>;
      case 3:
        return <Tag color="green">Hoàn thành</Tag>;
      default:
        return <Tag color="orange">Đang chờ duyệt</Tag>;
    }
  };

  const renderCourseTable = (courses) => (
    <Table 
      dataSource={courses} 
      rowKey="id"
      loading={isLoading}
    >
      <Table.Column title="Mã Khóa Học" dataIndex="code" key="code" />
      <Table.Column title="Tên Khóa Học" dataIndex="title" key="title" />
      <Table.Column
        title="Trạng Thái"
        dataIndex="status"
        key="status"
        render={(status) => getStatusTag(status)}
      />
      <Table.Column title="Bắt Đầu" dataIndex="durationStart" key="durationStart"
        render={(date) => new Date(date).toLocaleDateString()}
      />
      <Table.Column title="Kết Thúc" dataIndex="durationEnd" key="durationEnd"
        render={(date) => new Date(date).toLocaleDateString()}
      />
      <Table.Column
        title="Thao Tác"
        key="action"
        render={(_, record) => (
          <Button type="primary" onClick={() => showModal(record)}>Xem Chi Tiết</Button>
        )}
      />
    </Table>
  );

  return (
    <div className="my-courses-container">
      <Title level={2} className='blue' style={{ marginTop: '0' }}>Các Khóa Học Của Tôi</Title>
      <Tabs defaultActiveKey="1" items={[
        {
          key: '1',
          label: 'Khóa Học của tôi',
          children: activeCourses.length > 0
            ? renderCourseTable(activeCourses)
            : (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={
                  <span>
                    Bạn chưa có khóa học nào đang học hoặc đã hoàn thành.
                  </span>
                }
              />
            ),
        },
        {
          key: '2',
          label: 'Khóa Học Đang Chờ Duyệt',
          children: registeringCourses.length > 0
            ? renderCourseTable(registeringCourses)
            : (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={
                  <span>
                    Bạn không có khóa học nào đang chờ duyệt.
                  </span>
                }
              />
            ),
        },
      ]} />
      <Modal
        title="Chi Tiết Khóa Học"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {selectedCourse && (
          <>
            <p><strong>Mã Khóa Học:</strong> {selectedCourse.code}</p>
            <p><strong>Tên Khóa Học:</strong> {selectedCourse.title}</p>
            <p><strong>Mô Tả:</strong> {selectedCourse.description}</p>
            <p><strong>Trạng Thái:</strong> {getStatusTag(selectedCourse.status)}</p>
            <p><strong>Bắt Đầu:</strong> {new Date(selectedCourse.durationStart).toLocaleString()}</p>
            <p><strong>Kết Thúc:</strong> {new Date(selectedCourse.durationEnd).toLocaleString()}</p>
            <p><strong>Số Lượng:</strong> {selectedCourse.quantity}</p>
          </>
        )}
      </Modal>
    </div>
  );
};

export default MyCourses;