import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Card from './Card';

const Sucess = () => {
    return (
        <div className='min-h-[105vh] w-full bg-[#E1F2FF] py-14 flex justify-center items-center'>
            <div className='w-[90%] border border-black h-full flex flex-col justify-start items-start gap-y-6'>


                <div className='min-h-[50px] flex flex-col justify-between items-start '>
                    <h1 className='text-[35px] font-semibold'>Few Success stories </h1>
                    <p className='text-[22px]'>Insights, events, and announcements from our team</p>

                </div>

                <div className='w-[180px] h-[48px] text-[25px] bg-[#08759F] flex justify-center items-center gap-x-2 text-white uppercase'>
                    <p className='text-[18px]'> Update</p>
                    <FaArrowRight style={{ fontStyle: "16px", width: "16px" }} />




                </div>



                <div >
                    <Card/>
                </div>


            </div>
        </div>
    )
}

export default Sucess