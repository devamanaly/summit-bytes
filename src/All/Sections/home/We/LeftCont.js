import React from 'react'
import Pic1 from './Frame (1).png'
import Pic2 from './Frame (2).png'
import Pic3 from './Frame (3).png'
import Pic4 from "./Frame (4).png"

const LeftCont = () => {
    return (
        <div className=' w-[220px] flex flex-col justify-center items-center  min-h-[500px] border border-black'>
            <div className='w-[220px] h-[125px] border border-black flex text-[#6E6E6E] flex-col justify-center items-center gap-y-[10px]' >
                <div className='flex flex-row justify-start items-center  gap-x-[10px]'>

                    <div className='w-[25px] h-[25px] '>
                        <img src={Pic1} alt="" />
                    </div>
                    <p className='uppercase text-[17px] font-bold'>e-commerce</p>
                </div>

                <p className='uppercase text-[17px] font-bold'>Development</p>

            </div>
            <div className='w-[220px] h-[125px] border border-black flex text-[#6E6E6E] flex-col justify-center items-center gap-y-[10px]' >
                <div className='flex flex-row justify-start items-start  gap-x-[10px]'>

                    <div className='w-[25px] h-[25px] '>
                        <img src={Pic2} alt="" />
                    </div>
                    <p className='uppercase text-[17px] font-bold'>e-commerce</p>
                </div>

                <p className='uppercase text-[17px] font-bold'>Development</p>

            </div>
            <div className='w-[220px] h-[125px] border border-black flex text-[#6E6E6E] flex-col justify-center items-center gap-y-[10px]' >
                <div className='flex flex-row justify-start items-start  gap-x-[10px]'>

                    <div className='w-[25px] h-[25px] '>
                        <img src={Pic3} alt="" />
                    </div>
                    <p className='uppercase text-[17px] font-bold'>e-commerce</p>
                </div>

                <p className='uppercase text-[17px] font-bold'>Development</p>

            </div>
            <div className='w-[220px] h-[125px] border border-black flex gap-y-[10px] text-[#6E6E6E] flex-col justify-center items-center' >
                <div className='flex flex-row justify-start items-start  gap-x-[10px]'>

                    <div className='w-[25px] h-[25px] '>
                        <img src={Pic4} alt="" />
                    </div>
                    <p className='uppercase text-[17px] font-bold'>e-commerce</p>
                </div>

                <p className='uppercase text-[17px] font-bold'>Development</p>

            </div>

        </div>
    )
}

export default LeftCont
// bg-[#08759F]