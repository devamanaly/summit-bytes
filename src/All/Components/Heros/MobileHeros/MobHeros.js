import React from 'react'
import './style.css'
import Pic from './techjourneyer_72218_a_man_developing_a_mobile_app_integrated__9dd45d26-642e-4a60-8fa9-be90f31349f0_3-removebg-preview (1) 1.png'
const MobHeros = () => {
  return (
    <div className='w-[100vw] h-[85vh] offer-heros flex flex-row justify-end items-center gap-x-5 '>

      <div className='offer-left  w-[800px] h-[310px] flex flex-col justify-start gap-y-3 '>
        <p className='text-[#FFFFF0] text-[56px] font-bold'>MOBILE APP DEVELOPMENT </p>
   

        <p className='text-[#8492A6] text-[17px] font-semibold'>Home / Website Development.</p>


      </div>

      <div className='offer-right w-[500px] h-[500px]'>
        <img src={Pic} alt="" style={{ width: "100%", height: "100%" }} />
      </div>

    </div>
  )
}

export default MobHeros