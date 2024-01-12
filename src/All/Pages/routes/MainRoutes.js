import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Foot from '../../Components/Footer/Foot'
import Home from '../Home/Home'
import Head from '../../Components/Header/Head/Head'
import Menu from '../../Components/menu/Menu'
import About from '../About/About'
// import Menu from '../../Components/menu/Menu'
// import { useNavigate } from 'react-router-dom'

const MainRoutes = () => {
  const [hiddenMenuu, setHiddenMenu] = useState(false);
  console.log(hiddenMenuu)




  return (
    <>
      <BrowserRouter>
        {

          hiddenMenuu == false ? <Head functions={setHiddenMenu} /> : ""
        }

        {/* <Head /> */}
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/hiddenmenu' element={<Menu fun={setHiddenMenu} />} />



        </Routes>
        <Foot />


      </BrowserRouter>
    </>
  )
}

export default MainRoutes