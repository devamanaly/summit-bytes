import React from 'react'
import './style.css'
import Pic from './techjourneyer_72218_a_team_of_Hire_pre-vettedtop-tier_Web_dev_2d92a95c-77e5-4296-88a9-59165c9b33ed_0__1_-removebg-preview_(1)_1-transformed (1) (1).png'
const OfferHeros = () => {
  return (
    <div className='w-[100vw] h-[100vh] offer-heros flex flex-row justify-center items-center gap-x-5 '>

      <div className='offer-left w-[80%]  md:w-[665px] h-[310px] flex flex-col xl:items-start items-center justify-start  gap-y-3 '>
        <p className='text-[#FFFFF0] xlg:text-[63px] xl:text-[56px] font-bold text-[32px] sm:text-[36px] md:text-[42px]  ' data-aos="fade-down" >Hire pre-vetted,top-tier</p>
        <p className='text-[#00759F] xlg:text-[63px] xl:text-[56px] font-bold text-[32px] sm:text-[36px] md:text-[42px]' data-aos="fade-down" >
          Web developers</p>

        <p className='text-[#8492A6] xl:text-[17px] text-[14px] text-center xl:text-left font-semibold  ' data-aos="fade-up">Elevate your business with our comprehensive services.Starting at $1500/mo, we offer software development,marketing, UX/UI and more to optimize your operationsand
          boost productivity.</p>


      </div>

      <div className='offer-right lg:w-[400px] lg-[400px] xl:h-[350px] xl:w-[350px] xlg:w-[500px] xlg:h-[500px]  hidden xl:block'>
        <img src={Pic} alt="" style={{ width: "100%", height: "100%" }} />
      </div>

    </div>
  )
}

export default OfferHeros