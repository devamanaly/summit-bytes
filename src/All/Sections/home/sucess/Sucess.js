import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Card from './Card';
// import Slider from 'react-slick';
import Slide from './Slide';

const Sucess = () => {
    return (
        <div className='min-h-[105vh] w-full bg-[#E1F2FF]   md:py-14 flex justify-center items-center overflow-hidden'>
            <div className='w-[90%] h-full flex flex-col justify-start items-start gap-y-6'>


                <div className='min-h-[50px] flex flex-col justify-between items-start '>
                    <h1 className='xlg:text-[35px] xl:text-[32px] md:text-[30px] sm:text-[25px] font-semibold'>Few Success stories </h1>
                    <p className='xlg:text-[22px] xl:text-[18px] text-[15px] '>Insights, events, and announcements from our team</p>

                </div>

                <div className='w-[180px] h-[48px] text-[25px] bg-[#08759F] flex justify-center items-center gap-x-2 text-white uppercase'>
                    <p className='xlg:text-[18px] xl:text-[15px]'> Update</p>
                    <FaArrowRight style={{ fontStyle: "16px", width: "16px" }} />




                </div>



                <div className='w-[100%]' >
                    <Slide />

                    <Card />

                </div>


            </div>
        </div>
    )
}

export default Sucess