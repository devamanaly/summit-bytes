import React from 'react'
import { FaRegEye } from "react-icons/fa";

const Personal = () => {
  return (
    <div className='w-full h-[332px] bg-[#E1F2FF] flex justify-center items-center text-center flex-col'>
        <h1 className='text-[50px] font-bold'>Whats Our Personality?</h1>
        <div style={{width:"max-content"}}>
        <FaRegEye style={{fontSize:"102px", }} />

        </div>
        <p className='text-[20px] text-[#000000A6] w-[936px]'>Softkeystech is all in one platform with the help of experts, developers and analysts we provide every service related to blockchain t
echnology, we are just a click away from you.</p>

    </div>
  )
}

export default Personal