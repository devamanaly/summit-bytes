import React from 'react'
import Slider from './Slider'

const SMain = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col justify-start items-center bg-[#E1F2FF]'>
     <div className='min-h-[10px] w-[50vw] flex flex-col justify-center items-center text-center gap-y-[24px]  '>

        <h2 className='xlg:text-[45px] xl:text-[42px] font-bold text-[#282727] tracking-[2px]'>What we offer</h2>
        <p className=' xl:text-[18px] xlg:text-[20px] font-normal'>Softkeystech is all in one platform with the help of experts, developers and analysts we provide every service related to blockchain t
          echnology, we are just a click away from you.</p>

      </div>

      <Slider/>
    </div>
  )
}

export default SMain