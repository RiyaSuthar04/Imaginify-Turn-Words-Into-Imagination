import './index.css'
import { Routes,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import BuyCredits from './pages/BuyCredits'
import Home from './pages/Home'
import ResultPage from './pages/ResultPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/Login'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'

function App() {
  
 const{showLogin} = useContext(AppContext);
  return (
    <>
    <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50'>
      <ToastContainer position='bottom-right'/>
      <Navbar/>
      {showLogin &&<Login/>}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/buy' element={<BuyCredits/>} />
      <Route path='/result' element={<ResultPage/>} />
    </Routes>
    <Footer/>
    </div>
    </>
  )
}

export default App
