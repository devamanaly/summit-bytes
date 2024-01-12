import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import Logo from './techjourneyer_72218_a_minimalistic_logo_SummitByte__ad_hoc_colo_de4dd38a-c598-49d1-a655-a24948db3565-removebg-removebg-preview (1).png'
import { useNavigate } from 'react-router-dom';
const Menu = (props) => {
const navigate=useNavigate()
   const shift=()=>{
    props.fun(false)
navigate('/')

   }  
  
  return (

<div className='animate w-[100vw] h-[100vh]'>

    <div className='menu w-[100vw] h-[100vh] flex flex-col justify-start items-center ' >
      {/* meanu navbar */}


      <div className='w-[100vw] h-[10vh] flex flex-row justify-between items-center border border-white '>
        <div className='w-[10vh] h-full  ' style={{ marginLeft: "7.75rem" }}>
          <img src={Logo} alt="" className='w-full h-full' />


        </div>


        <div className='h-full flex justify-center items-center w-[10vh] ' style={{ marginRight: "5.75rem" }}>
          <IoMdClose style={{ color: "white", fontSize: "40px" }}  onClick={shift}  />
        </div>

      </div>



      <div className='border border-white w-[730px] h-[540px] flex flex-row justify-between'>

 
        <div className='w-full h-full border border-white'>
          <ul className='flex flex-col justify-end items-end'>
            <li className='w-[20vw] h-full flex links'>
              <a href="#" className='link-num'>01</a>
              <Link to="/" className='link-txt' id='title-txt'  onClick={()=>props.fun(false)}  >Home</Link>
            </li>

            <li className='w-[20vw] h-full flex links'>
              <a href="#" className='link-num'>02</a>
              <Link to="/about" className='link-txt' id='title-txt' onClick={()=>props.fun(false)} >About</Link>
            </li>

            <li className='w-[20vw] h-full flex links'>
              <a href="#" className='link-num'>02</a>
              <Link to='/whatwe' className='link-txt' id='title-txt' onClick={()=>props.fun(false)} >Services</Link>
            </li>


            <li className='w-[20vw] h-full flex links'>
              <a href="#" className='link-num'>02</a>
              <a href="#" className='link-txt' id='title-txt' >Home</a>
            </li>
          </ul>

        </div>

      </div>






      </div>

    </div>
  )
}

export default Menu