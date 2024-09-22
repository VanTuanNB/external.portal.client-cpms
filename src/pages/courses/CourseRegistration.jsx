import React, { useState, useEffect } from 'react';
import { Table, Button, message, Typography, Space, Empty, List, Avatar } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { registerCourse } from '../../store/slice/courseSlice';
import { useDispatch } from 'react-redux';
import { selectAuthState } from '../../store/selectors/authSelector';
import { selectCourseState } from '../../store/selectors/courseSelector';

const { Title } = Typography;

const CourseRegistration = ({ remainingCourses, userId }) => {
  const dispatch = useDispatch();

  const {isLoading} = useSelector(selectAuthState);
  const {loading} = useSelector(selectCourseState);

  const [selectedCourses, setSelectedCourses] = useState([]);

  const columns = [
    {
      title: 'Mã Khóa Học',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Tên Khóa Học',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Ngày bắt đầu',
      dataIndex: 'durationStart',
      key: 'durationStart',
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: 'Ngày kết thúc',
      dataIndex: 'durationEnd',
      key: 'durationEnd',
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: 'Số lượng còn lại',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Thao Tác',
      key: 'action',
      render: (_, record) => (
        <Button
          icon={<PlusOutlined />}
          onClick={() => handleAddCourse(record)}
          disabled={selectedCourses.some(course => course.id === record.id)}
        >
          Thêm
        </Button>
      ),
    },
  ];

  useEffect(() => {
    setSelectedCourses([])
  }, [remainingCourses]);

  const handleAddCourse = (course) => {
    setSelectedCourses([...selectedCourses, course]);
    message.success(`Đã thêm ${course.title} vào danh sách khóa học của bạn`);
  };

  const handleRemoveCourse = (courseId) => {
    setSelectedCourses(selectedCourses.filter(course => course.id !== courseId));
    message.success('Đã xóa khóa học khỏi danh sách');
  };

  const handleSubmitRegistration = async () => {
    try {
      const payload = {
        courseIds: selectedCourses.map(course => course.id),
        userId: userId
      }
      
      await dispatch(registerCourse(payload)).unwrap();
      message.success('Đăng ký khóa học thành công!');
    } catch (error) {
      message.error('Đăng ký khóa học thất bại: ' + (error.message || 'Đã có lỗi xảy ra'));
    }
  };

  return (
    <div>
      <Title level={2} style={{ marginTop: '0' }}>Đăng Ký Khóa Học</Title>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Table
          columns={columns}
          dataSource={remainingCourses}
          loading={isLoading || loading}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
        <div>
          <Title level={3}>Khóa Học Đã Chọn</Title>
          {selectedCourses.length > 0 ? (
            <Table
              dataSource={selectedCourses}
              columns={[
                {
                  title: 'Tên Khóa Học',
                  dataIndex: 'title',
                  key: 'title',
                },
                {
                  title: 'Mã Khóa Học',
                  dataIndex: 'code',
                  key: 'code',
                },
                {
                  title: 'Thao Tác',
                  key: 'action',
                  render: (_, record) => (
                    <Button
                      type="text"
                      danger
                      icon={<DeleteOutlined />}
                      onClick={() => handleRemoveCourse(record.id)}
                    >
                      Xóa
                    </Button>
                  ),
                },
              ]}
              pagination={false}
              rowKey="id"
            />
          ) : (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="Chưa chọn khóa học nào"
            />
          )}
        </div>
        <Button
          type="primary"
          onClick={handleSubmitRegistration}
          disabled={selectedCourses.length === 0}
          loading={isLoading || loading}
        >
          Xác Nhận Đăng Ký
        </Button>
      </Space>
    </div>
  );
};

export default CourseRegistration;