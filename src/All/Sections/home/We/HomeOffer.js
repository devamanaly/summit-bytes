import React, { useState } from 'react'
import LeftCont from './LeftCont'
import SideCont from './SideCont'

const HomeOffer = () => {

  const [text ,setText]=useState("e-commerece")
// console.log(text)

  return (
    <div className='w-full min-h-[100vh] md:flex flex-col justify-center items-center gap-y-[50px] hidden  '>
      <div className='min-h-[10px] w-[50vw] flex flex-col justify-center items-center text-center gap-y-[24px]  '>
        {/* <p className='text-[#252222] xlg:text-[15px] xl:text-[12px]'>For Our Customer</p> */}
        <h2 className='xlg:text-[45px] xl:text-[42px] font-bold text-[#282727] tracking-[2px]'>What we offer</h2>
        <p className=' xl:text-[18px] xlg:text-[20px] font-normal'>Softkeystech is all in one platform with the help of experts, developers and analysts we provide every service related to blockchain t
          echnology, we are just a click away from you.</p>

      </div>

      <div className='flex flex-row justify-center items-center gap-x-[24px] w-full h-[508px] '>
        <LeftCont func={setText} state={text}  />
        <SideCont state={text} />


      </div>

    </div>
  )
}

export default HomeOffer