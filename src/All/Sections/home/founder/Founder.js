import React from 'react'
// import Pic from './Rectangle 3859.png'
import Pic from './Ellipse 9.png'
const Founder = () => {
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center '>
        <h2 className='text-[45px] font-bold'>Our Founder and Co Founder</h2>
    <div className='w-full h-[600px] flex justify-center items-center gap-x-[158px]'>

        <div className=' w-[420px] h-[482px] flex flex-col justify-start items-center text-center gap-y-6  '>
            <img src={Pic} alt="" />
            <div>

            <p className='text-[25px]'>
            Lörem ipsum nekängar 
            </p>
            <p className='text-[20px] font-normal'>Lörem ipsum nekängar </p>
            </div>

        </div>
        <div className=' w-[420px] h-[482px] flex flex-col justify-start items-center text-center gap-y-6  '>
            <img src={Pic} alt="" />
            <div>

            <p className='text-[25px]'>
            Lörem ipsum nekängar 
            </p>
            <p className='text-[20px] font-normal'>Lörem ipsum nekängar </p>
            </div>

        </div>
    </div>
     </div>

  )
}

export default Founder