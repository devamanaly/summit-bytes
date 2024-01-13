import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import Pic from './Group 18.png'
const Combine = () => {
    return (
        <div className='w-full min-h-[100vh] bg-[#E1F2FF] flex flex-col justify-center items-center gap-y-[60px] py-14' >
            {/* top start */}

            <div className='flex flex-col text-center justify-center items-center gap-y-[22px]'>
                <p className='text-[15px]  '>For Our Customer</p>
                <h2 className='text-[#282727] xl:text-[42px] xlg:text-[48px] font-bold tracking-[2px]'>We combine design and technology to solve <br/> your biggest challenges</h2>
                <p className=' xl:text-[22px] xlg:text-[25px] font-normal '>Lörem ipsum nekängar didist nyvis rekaliga bokstavsdrog. Sesamma dir, <br/> mipydon: </p>

                <div className=' xl:w-[214px] xlg:w-[225px] h-[48px] text-[25px] bg-[#08759F] flex justify-center items-center gap-x-2 text-white uppercase'>
                    <p className='xlg:text-[23px] xl:text-[20px]'> Our Services</p>
                    <FaArrowRight style={{ fontSize: "16px", width: "16px" }} />




                </div>

            </div>


            {/* top end */}
            {/* bottom start */}

            <div className='min-w-[220px]  flex flex-row justify-center items-center xlg:gap-x-[140px] lg:gap-x-[126px] xl:gap-x-[33px]'>
                <div className='w-[300px] flex flex-col justify-start items-center text-center gap-y-5'>
                    <div className='w-[120px] h-[120px]'>
                        <img src={Pic} alt="" style={{ width: "100%", height: "100%" }} />

                    </div>
                    <h4 className='xlg:text-[35px] xl:text-[32px] text-[#282727]' >Innovation</h4>
                    <p className='xlg:text-[20px] xl:text-[18px] text-[#282727]'>We partner with teams to create
                        strategies that meet current and
                        future needs.</p>

                    <ul className='leading-[40px] uppercase tracking-[1px] ' style={{fontFamily:"sans-serif"}}>


                        <li className='xlg:text-[20px] xl:text-[16px] text-[#262424] font-normal '>Product roadmapping</li>
                        <li className='text-[20px] text-[#262424] font-normal '> Research & workshops</li>
                        <li className='text-[20px] text-[#262424] font-normal '>Technical strategy</li>
                        <li className='text-[20px] text-[#262424] font-normal '>Ideation & concepting</li>


                    </ul>

                </div>
                <div className='w-[300px] flex flex-col justify-start items-center text-center gap-y-5'>
                    <div className='w-[120px] h-[120px]'>
                        <img src={Pic} alt="" style={{ width: "100%", height: "100%" }} />

                    </div>
                    <h4 className='text-[35px] text-[#282727]' >Innovation</h4>
                    <p className='text-[22px] text-[#282727]'>We partner with teams to create
                        strategies that meet current and
                        future needs.</p>

                    <ul className='leading-[40px] uppercase tracking-[1px] ' style={{fontFamily:"sans-serif"}}>


                        <li className='xlg:text-[20px] xl:text-[16px]  text-[#262424] font-normal '>Product roadmapping</li>
                        <li className='xlg:text-[20px] xl:text-[16px] text-[#262424] font-normal '> Research & workshops</li>
                        <li className='xlg:text-[20px] xl:text-[16px] text-[#262424] font-normal '>Technical strategy</li>
                        <li className='xlg:text-[20px] xl:text-[16px] text-[#262424] font-normal '>Ideation & concepting</li>


                    </ul>

                </div>
                <div className='w-[300px] flex flex-col justify-start items-center text-center gap-y-5'>
                    <div className='w-[120px] h-[120px]'>
                        <img src={Pic} alt="" style={{ width: "100%", height: "100%" }} />

                    </div>
                    <h4 className='text-[35px] text-[#282727]' >Innovation</h4>
                    <p className='text-[22px] text-[#282727]'>We partner with teams to create
                        strategies that meet current and
                        future needs.</p>

                    <ul className='leading-[40px] uppercase tracking-[1px] ' style={{fontFamily:"sans-serif"}}>


                        <li className='text-[20px] text-[#262424] font-normal '>Product roadmapping</li>
                        <li className='text-[20px] text-[#262424] font-normal '> Research & workshops</li>
                        <li className='text-[20px] text-[#262424] font-normal '>Technical strategy</li>
                        <li className='text-[20px] text-[#262424] font-normal '>Ideation & concepting</li>


                    </ul>

                </div>

            </div>

            {/* bottom end */}


        </div>
    )
}

export default Combine