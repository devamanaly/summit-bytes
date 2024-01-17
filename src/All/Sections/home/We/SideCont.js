import React from 'react'
import data from './Textdata'
import Pic from './image-1.png.png'
const SideCont = ({state}) => {
  const Arr=data.filter(e=>e.catogory==state)
  console.log(Arr)
  return (
    <div className=' xl:w-[80%] xlg:w-[60%] h-[100%]  flex flex-row justify-between items-start '>

        {
          Arr.map((ele)=>{
            return(

            
      <div className='min-w-[50%] h-[100%]  flex flex-col justify-start items-start gap-y-6  '>

          
          <h2 className='text-[24px] text-[#282727] font-normal' >
        {ele.head}
        </h2>

        <p className='xlg:text-[22px] xl:text-[18px] text-[#383838] w-[460px] leading-8 '>
          {ele.detail}
        </p>

        <div className=' bg-[#08759F] h-[36px] w-[120px] flex justify-center items-center'>
          <p className='text-[17px]  text-white' >Read More</p>
        </div>
      </div>
      )
    })
        }
      <div className='w-[265px] h-full'>
        <img src={Pic} alt="" />
        </div>  
    </div>
  )
}

export default SideCont