import React from 'react'
import OfferHeros from '../../Components/Heros/offerHeros/OfferHeros'

const Form = () => {
  return (
    <>
<div className='flex flex-col '>
    <OfferHeros/>


    <div className='h-[80vh] w-full flex justify-center items-center'>
        <div className='w-[50%] min-h-[10vh] '>
            <form className='flex flex-col justify-start items-start gap-y-6'>
                  <h2 className='xlg:text-[28px] xl:text-[24px]'>Do you have any question?</h2>

                <div className='h-[40px] w-full  first:'>
                    <input type="text" placeholder='Your Name'   className='  text-[#383838] focus-visible:border-none focus-visible:outline-none rounded-[12px] xlg:text[20px] xl:text[16px] bg-[#E1F2FF]  px-5 h-full w-full ' />
                </div>
                <div className='h-[40px] w-full  first:'>
                    <input type="email" placeholder='Your Emai l'  className  =' text-[#383838] focus-visible:border-none focus-visible:outline-none rounded-[12px] xlg:text[20px] xl:text[16px] bg-[#E1F2FF] px-5 h-full w-full ' />
                </div>
                <div className='h-[40px] w-full  first:'>
                    <input type="text" placeholder='Your Name'   className='  text-[#383838] focus-visible:border-none focus-visible:outline-none rounded-[12px] xlg:text[20px] xl:text[16px] bg-[#E1F2FF]  px-5 h-full w-full ' />
                </div>
                <div className='h-[40px] w-full  first:'>
                    <input type="text" placeholder='Your Name'   className='  text-[#383838] focus-visible:border-none focus-visible:outline-none rounded-[12px] xlg:text[20px] xl:text[16px] bg-[#E1F2FF]  px-5 h-full w-full  h-' />
                </div>

                <div className='xl:w-[110px] xlg:w-[130px] h-[38px] flex justify-center items-center bg-[#08759F] rounded-[24px]'>
                    <p className='text-white xlg:text-[20px] xl:text-[16px]'>Submit Text </p>
                    
                </div>
            </form>
            

        </div>
    </div>
</div>

    </>

  )
}

export default Form