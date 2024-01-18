import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import Logo from './techjourneyer_72218_a_minimalistic_logo_SummitByte__ad_hoc_colo_de4dd38a-c598-49d1-a655-a24948db3565-removebg-removebg-preview (1).png'
import { useNavigate } from 'react-router-dom';
const Menu = (props) => {
  const navigate = useNavigate()
  const shift = () => {
    props.fun(false)
    navigate('/')

  }

  return (

    <div className='animates '>

      <div className='menu w-[100vw] h-[100vh] flex flex-col justify-start items-center ' >
        {/* meanu navbar */}


        <div className='w-[100vw] h-[10vh] flex flex-row justify-between items-center  '>
          <div className='w-[10vh] h-full  ' style={{ marginLeft: "7.75rem" }}>
            <img src={Logo} alt="" className='w-full h-full' />


          </div>


          <div className='h-full flex justify-center items-center w-[10vh] ' style={{ marginRight: "5.75rem" }}>
            <IoMdClose style={{ color: "white", fontSize: "40px" }} onClick={shift} />
          </div>

        </div>



        <div className=' w-[730px] h-[540px] flex flex-row justify-between'>


          <div className='w-full h-full '>
            <ul className='flex flex-col justify-end items-end'>
              <li className='w-[20vw] h-full flex links'>
                <a href="#" className='link-num'>01</a>
                <div className='outPop'>

                <Link to="/" className='link-txt popUpWord' id='title-txt1' onClick={() => props.fun(false)}  >Home</Link>
                </div>
              </li>

              <li className='w-[20vw] h-full flex links'>
                <a href="#" className='link-num'>02</a>
                <Link to="/about" className='link-txt' id='title-txt2' onClick={() => props.fun(false)} >About</Link>
              </li>

              <li className='w-[20vw] h-full flex links'>
                <a href="#" className='link-num'>02</a>
                <Link to='/whatwe' className='link-txt' id='title-txt3' onClick={() => props.fun(false)} >Services</Link>
              </li>


              <li className='w-[20vw] h-full flex links'>
                <a href="#" className='link-num'>02</a>
                <Link to='/contact' className='link-txt' id='title-txt4' onClick={() => props.fun(false)} >Contact</Link>
              </li>
            </ul>

          </div>

        </div>






      </div>

    </div>
  )
}

export default Menu