import { Outlet } from 'react-router'
import HeaderApp from './pages/common/header/Header'
import FooterApp from './pages/common/footer/Footer'

const App = () => {

  return (
    <>
      <HeaderApp />
      <div className='site-container'>
        <Outlet />
      </div>
      <FooterApp />
    </>
  )
}

export default App
