import React from 'react'
import { FaRegEye } from "react-icons/fa";

const Personal = () => {
  return (
    <div className='w-full h-[332px] bg-[#E1F2FF] flex justify-center items-center text-center flex-col'>
      <h1 className=' xl:text-[42px] xlg:text-[50px] md:text-[37px] sm:text-[35px] text-[30px] font-bold'>Whats Our Personality?</h1>
      <div style={{ width: "max-content" }}>
        <FaRegEye  className=' md:text-[102px] sm:text-[80px] text-[60px] ' />

      </div>
      <p className=' xl:text-[18px] xlg:text-[20px] md:text-[17px] text-[14px] text-[#000000A6] w-[80%] xl:w-[936px]'>Softkeystech is all in one platform with the help of experts, developers and analysts we provide every service related to blockchain t
        echnology, we are just a click away from you.</p>

    </div>
  )
}

export default Personal