import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import CourseRegistration from './CourseRegistration';
import MyCourses from './MyCourses';
import { selectAuthState } from '../../store/selectors/authSelector';
import { getUserById } from '../../store/slice/authSlice';

const { TabPane } = Tabs;

const Course = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const currentPath = location.pathname;

  const { user } = useSelector(selectAuthState);

  const [activeCourses, setActiveCourses] = useState([]);
  const [registeringCourses, setRegisteringCourses] = useState([]);
  const [remainingCourses, setRemainingCourses] = useState([]);

  const userId = Cookies.get('user');
  const token = Cookies.get('accessToken');

  useEffect(() => {
    if (!user && token && userId) {
      dispatch(getUserById({ userId, token }));
    }
    if (user) {
      setActiveCourses(user.courses);
      setRegisteringCourses(user.coursesRegistering);
      setRemainingCourses(user.coursesRemaining);
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (user) {
      if (currentPath === '/my-courses') {
        navigate('/my-courses');
      } else if (currentPath === '/course-registration') {
        navigate('/course-registration');
      }
    }
  }, [user, currentPath, navigate]);

  const handleTabChange = (key) => {
    navigate(key);
  };

  return (
    <Tabs
      defaultActiveKey={currentPath}
      onChange={handleTabChange}
      items={[
        {
          key: '/my-courses',
          label: 'Khóa Học Của Tôi',
          children: (
            <MyCourses
              activeCourses={activeCourses}
              registeringCourses={registeringCourses}
            />
          ),
        },
        {
          key: '/course-registration',
          label: 'Đăng Ký Khóa Học',
          children: (
            <CourseRegistration
              remainingCourses={remainingCourses}
              userId={user ? user.id : ''}
            />
          ),
        },
      ]}
    />
  );
};

export default Course;