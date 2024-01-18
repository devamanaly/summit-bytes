import React from 'react'
import Pic from './Premium Photo _ Happy asian boss manager business man wears black suit in relax pose_.png'
const Team = () => {
    return (


        <div className=' min-h-[70vh]  flex flex-col justify-start items-center text-center gap-y-14 ' style={{paddingBottom:"100px",paddingTop:"100px"}}>


            <div className=' flex flex-col justify-start items-center '>
                <h1 className='text-[#000] text-[45px]'>
                    Our Team
                </h1>

                <p className='text-[#8492A6] w-[700px] text-[23px]'>Launch your product faster with pre-vetted talent</p>

            </div>

            <div className=' h-[50%] w-full flex flex-row justify-center items-center gap-x-[16px] ' style={{height:"max-content"}}>



                <div className='flex flex-col justify-center items-center w-[17%] text-left '>
                    <div className='h-[380px] w-[100%] rounded-[10px] '>
                        <img src={Pic} alt="" className='w-full h-full rounded-[16px]' />
                    </div>
                    <div className=' flex flex-col justify-start items-start text-left w-full gap-y-[0px] '>
                        <h1 className='text-[#000] w-full text-[25px]'>
                            Our Team
                        </h1>

                        <p className=' text-[#8492A6]  text-[23px]'>Full Stack Dev</p>

                    </div>
                </div>
                <div className='flex flex-col justify-center items-center w-[17%] text-left '>
                    <div className='h-[380px] w-[100%] rounded-[16px] '>
                        <img src={Pic} alt="" className='w-full h-full rounded-[16px]' />
                    </div>
                    <div className=' flex flex-col justify-start items-start text-left w-full gap-y-[0px] '>
                        <h1 className='text-[#000] w-full text-[25px]'>
                            Our Team
                        </h1>

                        <p className=' text-[#8492A6]  text-[23px]'>Full Stack Dev</p>

                    </div>
                </div>
                <div className='flex flex-col justify-center items-center w-[17%] text-left '>
                    <div className='h-[380px] w-[100%] rounded-[16px] '>
                        <img src={Pic} alt="" className='w-full h-full rounded-[16px]' />
                    </div>
                    <div className=' flex flex-col justify-start items-start text-left w-full gap-y-[0px] '>
                        <h1 className='text-[#000] w-full text-[25px]'>
                            Our Team
                        </h1>

                        <p className=' text-[#8492A6]  text-[23px]'>Full Stack Dev</p>

                    </div>
                </div>
                <div className='flex flex-col justify-center items-center w-[17%] text-left '>
                    <div className='h-[380px] w-[100%] rounded-[16px] '>
                        <img src={Pic} alt="" className='w-full h-full rounded-[16px]' />
                    </div>
                    <div className=' flex flex-col justify-start items-start text-left w-full gap-y-[0px] '>
                        <h1 className='text-[#000] w-full text-[25px]'>
                            Our Team
                        </h1>

                        <p className=' text-[#8492A6]  text-[23px]'>Full Stack Dev</p>

                    </div>
                </div>
                <div className='flex flex-col justify-center items-center w-[17%] text-left '>
                    <div className='h-[380px] w-[100%]  '>
                        <img src={Pic} alt="" className='w-full h-full rounded-[16px]' />
                    </div>
                    <div className=' flex flex-col justify-start items-start text-left w-full gap-y-[0px] '>
                        <h1 className='text-[#000] w-full text-[25px]'>
                            Our Team
                        </h1>

                        <p className=' text-[#8492A6]  text-[23px]'>Full Stack Dev</p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Team