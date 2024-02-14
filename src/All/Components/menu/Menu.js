import React, { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import Logo from '../Header/Head/output-onlinepngtools (1) (1).svg'
// import { useNavigate } from 'react-router-dom';
const Menu = (props) => {

  const [hover, setHover] = useState(false)
  const change = () => {
    setHover(true)
    // console.log('in')

  }
  const chang = () => {
    setHover(false)
    // console.log('out')

  }
  const funtion = () => {
    // console.log('oa,')
    props.funx(false)
    // props.outFunx(false)
    // console.log('i am false')
    // setInterval(() => {



    //   props.funx(false)
    // }, 1000)
  }
  // ]
  return (

    <div className={`${props.out ? 'animates' : 'animateOut'}`}>

      <div className='menu w-[100vw] h-[100vh] flex flex-col justify-start items-center  gap-y-[10vh]' >
        {/* meanu navbar */}


        <div className='w-[80vw] h-[10vh] flex flex-row justify-between items-center  '>
          <div className='w-[10vh] h-full mx-[] ' >
            <img src={Logo} alt="" className='w-full h-full' />


          </div>


          <div className='h-full flex justify-center items-center w-[10vh]  ' >
            <IoMdClose style={{ color: "white", fontSize: "40px", cursor: "pointer" }} onClick={funtion} />
          </div>

        </div>



        <div className=' w-[100vw] h-[540px] flex flex-row justify-between '>


          <div className='w-full h-full flex justify-center items-center '>
            <ul className={`flex flex-col xl:justify-end justify-center  items-center  w-[20%]  ${hover ? "hovr" : " link-cont "} `} onMouseEnter={change} onMouseLeave={chang} >
              <li className=' h-full flex links'>

                <div className='outPop'>

                  <Link to="/" className='link-txt popUpWord' id='title-txt1' onClick={() => props.fun(false)}  >Home</Link>
                </div>
              </li>

              <li className=' h-full flex links'>

                <Link to="/about" className='link-txt' id='title-txt2' onClick={() => props.fun(false)} >About</Link>
              </li>

              <li className=' h-full flex links'>

                <Link to='/whatwe' className='link-txt ' id='title-txt3' onClick={() => props.fun(false)} >Services</Link>
              </li>


              <li className=' h-full flex links'>

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