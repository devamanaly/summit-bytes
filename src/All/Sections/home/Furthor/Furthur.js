import React from 'react'
import './style.css'
const Furthur = () => {
  return (
    <div className=' furthor w-full h-[508px]  flex flex-col md:flex-row justify-around items-center text-center'>
      <div className='min-w-[10vw] min-h-[8vh]'>
        <h2 className=' xlg:text-[45px] xl:text-[40px] text-[33px] text-[#093F68] font-bold  sm:w-[450px] md:w-[500px] xl:w-[569px] '>Call us for further information.
          Summit Bytes customer
          care is here to help you anytime.</h2>
        <p className='text-[#8492A6] text-[20px] text-bold xl:text-[18px]' >We're available 24 hours!</p>
      </div>

      <div className='min-w-[10vw] min-h-[8vh] flex flex-col justify-around items-center gap-y-[5px] '>
        <div className='flex flex-col justify-center items-center gap-y-[5px]'>
          <p className=' uppercase text-[#8492A6] text-[12px] tracking-[5px]'>Call Us Now</p>
          <p className=' xlg:text-[40px] xl:text-[36px] text-[#35404E] font-bold tracking-[3px]'>+92 3401048515</p>

        </div>

        <div className='xlg:w-[115px] w-[115px] xl:w-[106px] h-[45px]  rounded-[30px] bg-[#093F68] flex justify-center items-center '>
          <p className='text-[17px] text-white '>Contact Us</p>

        </div>
      </div>

    </div>
  )
}

export default Furthur