import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Typography, Skeleton } from 'antd';
import {
  BookOutlined,
  ReadOutlined,
} from '@ant-design/icons';
import { TrainingPrograms } from './components/TrainingPrograms';
import Faculty from './components/Faculty';
import './Academic.scss';
import EducationLevels from './components/EducationLevels';
import { useDispatch, useSelector } from 'react-redux';
import { getCurriculum } from '../../store/slice/curriculumSlice';
import { selectCurriculumData, selectCurriculumLoading, selectCurriculumError } from '../../store/selectors/curriculumSelectors';
import { getFacultyById } from '../../store/slice/facultySlice';
import { selectFacultyByIdData, selectFacultyByIdError, selectFacultyByIdLoading } from '../../store/selectors/facultySelectors';
import { isNull } from 'lodash';

const { Title, Paragraph } = Typography;

const Academic = () => {
  const dispatch = useDispatch();

  const curriculum = useSelector(selectCurriculumData);
  const isCurriculumLoading = useSelector(selectCurriculumLoading);
  const curriculumError = useSelector(selectCurriculumError);
  const faculty = useSelector(selectFacultyByIdData);
  const isFacultyLoading = useSelector(selectFacultyByIdLoading);
  const facultyError = useSelector(selectFacultyByIdError);

  const [facultyByCurriculum, setFacultyByCurriculum] = useState([])
  const [courseByFaculty, setCourseByFaculty] = useState(null)

  useEffect(() => {
    dispatch(getCurriculum());
  }, []);

  useEffect(() => {
    if (curriculum && curriculum.length > 0) {
      setFacultyByCurriculum(curriculum[0].faculties || []);
    }
  }, [curriculum])

  useEffect(() => {
    if (facultyByCurriculum && facultyByCurriculum.length > 0) {
      setCourseByFaculty(facultyByCurriculum[0].id || '');
    }
  }, [facultyByCurriculum])

  useEffect(() => {
    if (!isNull(courseByFaculty)) {
      dispatch(getFacultyById(courseByFaculty));
    }
  }, [courseByFaculty]);

  const handleChangeCurriculum = (item) => {
    setFacultyByCurriculum(item.faculties || []);
  };

  const handleChangeFaculty = (item) => {
    setCourseByFaculty(item.id || '');
  };

  return (
    <div className="academic-container">
      <div className="academic-hero">
        <div className="academic-hero-overlay" />
        <h1>Đào tạo tại Đại học Trà Vinh</h1>
        <p>
          Đại học Trà Vinh cung cấp một môi trường học tập chất lượng cao với các chương trình đào tạo đa dạng và phong phú.
          Chúng tôi cam kết mang đến cho sinh viên những kiến thức chuyên sâu và kỹ năng thực tiễn,
          giúp họ tự tin bước vào thị trường lao động và phát triển sự nghiệp.
          Với đội ngũ giảng viên giàu kinh nghiệm và cơ sở vật chất hiện đại, chúng tôi luôn nỗ lực tạo ra một môi trường học tập
          thân thiện và sáng tạo.
        </p>
      </div>

      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <Card hoverable className="h-full">
            <div className="flex items-center mb-4">
              <BookOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '12px' }} />
              <Title className='m-0 blue' level={3}>Chương trình đào tạo</Title>
            </div>
            <Paragraph>
              Chương trình đào tạo tại Đại học Trà Vinh được thiết kế để cung cấp kiến thức chuyên sâu và kỹ năng thực tiễn cho sinh viên. Với đội ngũ giảng viên giàu kinh nghiệm và cơ sở vật chất hiện đại, chúng tôi cam kết mang đến một môi trường học tập chất lượng cao.
            </Paragraph>
            <Paragraph>
              Sinh viên sẽ được trang bị không chỉ kiến thức học thuật mà còn các kỹ năng mềm cần thiết để thành công trong sự nghiệp tương lai. Đại học Trà Vinh luôn chú trọng việc kết nối với doanh nghiệp, tạo cơ hội thực tập và việc làm cho sinh viên ngay trong quá trình học tập.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card hoverable className="h-full">
            <div className="flex items-center mb-4">
              <ReadOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '12px' }} />
              <Title level={3} className="m-0 blue">Phương pháp giảng dạy</Title>
            </div>
            <Paragraph>
              Chúng tôi áp dụng phương pháp giảng dạy tiên tiến, kết hợp giữa lý thuyết và thực hành, nhằm đảm bảo sinh viên có thể áp dụng kiến thức vào thực tế công việc sau khi tốt nghiệp.
            </Paragraph>
            <Paragraph>
              Các phương pháp giảng dạy của chúng tôi bao gồm học tập dựa trên dự án, thảo luận nhóm, và các buổi thực hành trong phòng thí nghiệm hiện đại. Chúng tôi cũng tích hợp công nghệ vào quá trình học tập, sử dụng các nền tảng học tập trực tuyến và các công cụ mô phỏng để tăng cường trải nghiệm học tập.
            </Paragraph>
          </Card>
        </Col>
      </Row>

      {isCurriculumLoading ? (
        <Skeleton active paragraph={{ rows: 4 }} />
      ) : curriculumError ? (
        <div style={{ textAlign: 'center', margin: '20px 0', color: 'red' }}>
          Error loading curriculum data: {curriculumError}
        </div>
      ) : curriculum && curriculum.length > 0 ? (
        <>
          <EducationLevels
            curriculum={curriculum}
            onItemClick={handleChangeCurriculum}
          />
          <Faculty
            faculties={facultyByCurriculum}
            onItemClick={handleChangeFaculty}
          />
        </>
      ) : (
        <Skeleton active paragraph={{ rows: 4 }} />
      )
      }

      {isFacultyLoading ? (
        <Skeleton active paragraph={{ rows: 4 }} />
      ) : facultyError ? (
        <div style={{ textAlign: 'center', margin: '20px 0', color: 'red' }}>
          Error loading curriculum data: {facultyError}
        </div>
      ) : faculty && faculty.userData ? (
        <>
          <TrainingPrograms
            courses={faculty.userData.courses}
          />
        </>
      ) : (
        <Skeleton active paragraph={{ rows: 4 }} />
      )
      }
    </div>
  );
};

export default Academic;