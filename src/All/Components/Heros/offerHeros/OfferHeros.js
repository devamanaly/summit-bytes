import React from 'react'
import './style.css'
import Pic from './techjourneyer_72218_a_team_of_Hire_pre-vettedtop-tier_Web_dev_2d92a95c-77e5-4296-88a9-59165c9b33ed_0__1_-removebg-preview (1) 1.png'
const OfferHeros = () => {
  return (
    <div className='w-[100vw] h-[85vh] offer-heros flex flex-row justify-center items-center gap-x-5 '>

      <div className='offer-left  w-[665px] h-[310px] flex flex-col justify-start gap-y-3 '>
        <p className='text-[#FFFFF0] xlg:text-[63px] xl:text-[56px] font-bold'>Hire pre-vetted,top-tier</p>
        <p className='text-[#00759F] xlg:text-[63px] xl:text-[56px] font-bold'>
          Web developers</p>

        <p className='text-[#8492A6] text-[17px] font-semibold'>Elevate your business with our comprehensive services.Starting at $1500/mo, we offer software development,marketing, UX/UI and more to optimize your operationsand
          boost productivity.</p>


      </div>

      <div className='offer-right w-[500px] h-[500px]'>
        <img src={Pic} alt="" style={{ width: "100%", height: "100%" }} />
      </div>

    </div>
  )
}

export default OfferHeros