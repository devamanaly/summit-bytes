import React from 'react'
import './style.css'
const Furthur = () => {
  return (
    <div className=' furthor w-full h-[508px] border border-black flex flex-row justify-around items-center'>
      <div className='min-w-[10vw] min-h-[8vh]'>
        <h2 className=' text-[45px] text-[#093F68] font-bold w-[569px] '>Call us for further information.
          Summit Bytes customer
          care is here to help you anytime.</h2>
        <p className='text-[#8492A6] text-[20px] text-bold'>We're available 24 hours!</p>
      </div>

      <div className='min-w-[10vw] min-h-[8vh] flex flex-col justify-around items-center gap-y-[5px] '>
        <div className='flex flex-col justify-center items-center gap-y-[5px]'>
          <p className=' uppercase text-[#8492A6] text-[12px] tracking-[5px]'>Call Us Now</p>
          <p className='text-[40px] text-[#35404E] font-bold tracking-[3px]'>+92 3401048515</p>

        </div>

        <div className='w-[115px] h-[45px] border border-black rounded-[30px] bg-[#093F68] flex justify-center items-center '>
          <p className='text-[17px] text-white '>Contact Us</p>

        </div>
      </div>

    </div>
  )
}

export default Furthur