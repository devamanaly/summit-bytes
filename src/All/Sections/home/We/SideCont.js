import React from 'react'
import Pic from './image-1.png.png'
const SideCont = () => {
  return (
    <div className='w-[60%] h-[100%] border border-black flex flex-row justify-between items-start '>

      <div className='w-[50%] h-[100%] border border-black flex flex-col justify-start items-start  '>

        <h2 className='text-[24px] text-[#282727] font-normal' >
          White Label Exchange Software
        </h2>

        <p className='text-[22px] text-[#383838] w-[460px] '>
          Completely predominate backend
          functionalities whereas professional
          convergence. Enthusiastically deploy
          multimedia based metrics with turnkey networks Completely predominate backend
          functionalities whereas professional
          convergence. Enthusiastically deploy
          multimedia based metrics with turnkey networks Completely predominate backend
          functionalities whereas professional
          convergence. Enthusiastically deploy
          multimedia based metrics with turnkey networks Completely predominate backend
          functionalities whereas professional
          convergence. Enthusiastically deploy
          multimedia based metrics with turnkey networks
        </p>

        <div className=' bg-[#08759F] h-[36px] w-[120px] flex justify-center items-center'>
          <p className='text-[17px]  text-white' >Read More</p>
        </div>
      </div>
      <div className='w-[265px] border border-black h-full'>
        <img src={Pic} alt="" />
        </div>  
    </div>
  )
}

export default SideCont