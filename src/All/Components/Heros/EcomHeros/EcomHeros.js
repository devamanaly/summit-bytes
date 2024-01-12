import React from 'react'
import './style.css'
import Pic from './techjourneyer_72218_a_ecommerce_devlopment_image_integrated_w_8ceb2889-3924-4983-95ee-021291766edd_0__1_-removebg-preview 1.png'
const EcomHeros = () => {
  return (
    <div className='w-[100vw] h-[85vh] offer-heros flex flex-row justify-center items-center gap-x-5 '>

      <div className='offer-left  w-[665px] h-[310px] flex flex-col justify-start gap-y-3 '>
        <p className='text-[#FFFFF0] text-[56px] font-bold'>We make e-commerce websites that are secure, scalable and stand out.</p>
   

        <p className='text-[#8492A6] text-[17px] font-semibold'>Home / E-commerce Development</p>


      </div>

      <div className='offer-right w-[500px] h-[500px]'>
        <img src={Pic} alt="" style={{ width: "100%", height: "100%" }} />
      </div>

    </div>
  )
}

export default EcomHeros