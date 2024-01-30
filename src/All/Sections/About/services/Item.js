import React from 'react'
import Pic from './logo192.png'
const Item = () => {
  return (
    <div className='xl:w-[30%] md:w-[350px] w-[80%] h-[76px] bg-[#093F68] flex flex-row justify-center items-center gap-x-5  '>
      <div className='w-[42px] h-[42px]'>
        <img src={Pic} alt="" className='w-full h-full' />

      </div>

      <p className='text-[25px] text-white'>React js</p>
    </div>
  )
}

export default Item