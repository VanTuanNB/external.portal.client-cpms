import { Outlet } from 'react-router'
import HeaderApp from './pages/common/header/Header'
import FooterApp from './pages/common/footer/Footer'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getSchool } from "./store/slice/schoolSlice";
import { selectSchoolState } from "./store/selectors/schoolSelectors";

const App = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector(selectSchoolState);

  useEffect(() => {
    dispatch(getSchool());
  }, []); 


  return (
    <>
      <HeaderApp 
        logo={data.length > 0 ? data[0].logoUrl : ''}
        loading={loading}
      />
      <div className='site-container'>
        <Outlet />
      </div>
      <FooterApp 
        data={data.length > 0 ? data[0] : {}}
        loading={loading}
      />
    </>
  )
}

export default App
