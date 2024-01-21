import React from 'react'
import data from './Textdata'
import Pic from './image-1.png.png'
const SideCont = ({state}) => {
  const Arr=data.filter(e=>e.catogory==state)
  console.log(Arr)
  return (
    <div className=' xl:w-[65%] xlg:w-[60%] h-[100%]  flex flex-row justify-between items-start gap-x-7 '>

        {
          Arr.map((ele)=>{
            return(

            
      <div className='w-[50%] h-[100%]  flex flex-col justify-start items-start gap-y-6  '>

          
          <h2 className='text-[24px] text-[#282727] font-normal' >
        {ele.head}
        </h2>

        <p className='xlg:text-[22px] xl:text-[18px] text-[#383838] xlg:w-[460px] xl:w-[420px] leading-8 '>
          {ele.detail}
        </p>

        <div className=' bg-[#08759F] h-[36px] w-[120px] flex justify-center items-center'>
          <p className='text-[17px]  text-white' >Read More</p>
        </div>
      </div>
      )
    })
        }
      <div className='xlg:w-[265px] xlg:h-full xl:w-[219px] xl:h-auto'>
        <img src={Pic} alt="" />
        </div>  
    </div>
  )
}

export default SideCont