import React from 'react'
import Pic from './Premium Photo _ Happy asian boss manager business man wears black suit in relax pose_.png'
import TeamData from './TeamData'
const Team = () => {
    return (


        <div className=' min-h-[70vh]  flex flex-col justify-start items-center text-center gap-y-14 ' style={{ paddingBottom: "100px", paddingTop: "100px" }}>


            <div className=' flex flex-col justify-start items-center '>
                <h1 className='text-[#000] xl:text-[45px] md:text-[40px] sm:text-[38px] text-[35px] '>
                    Our Team
                </h1>

                <p className='text-[#8492A6] md::w-[700px] xl:text-[23px] md:text-[20px] text-[17px]'>Launch your product faster with pre-vetted talent</p>

            </div>

            <div className=' h-[50%] w-full flex flex-row justify-center gap-y-8  flex-wrap items-center gap-x-[16px]   ' style={{ height: "max-content" }}>

                {
                    TeamData.map((ele) => {
                        return (



                            <div className='flex flex-col justify-center items-center xlg:w-[306px] xl:w-[280px] sm:w-[280px] w-[80%] md:w-[310px] text-left '>
                                <div className='xlg:h-[380px] xl:h-[350px] w-[100%] rounded-[10px] '>
                                    <img src={ele.img} alt="" className='w-full h-full rounded-[16px]' />
                                </div>
                                <div className=' flex flex-col justify-start items-start text-left w-full gap-y-[0px] '>
                                    <h1 className='text-[#000] w-full text-[23px] sm:text-[25px]'>
                                        {ele.name}
                                    </h1>

                                    <p className=' text-[#8492A6]  sm:text-[23px] text-[16px]'>Full Stack Dev</p>

                                </div>
                            </div>
                        )
                    })
                }

                {/* <div className='flex flex-col justify-center items-center w-[17%] text-left '>
                    <div className='h-[380px] w-[100%] rounded-[16px] '>
                        <img src={Pic} alt="" className='w-full h-full rounded-[16px]' />
                    </div>
                    <div className=' flex flex-col justify-start items-start text-left w-full gap-y-[0px] '>
                        <h1 className='text-[#000] w-full text-[25px]'>
                            Our Team
                        </h1>

                        <p className=' text-[#8492A6]  text-[23px]'>Full Stack Dev</p>

                    </div>
                </div> */}
                {/* <div className='flex flex-col justify-center items-center w-[17%] text-left '>
                    <div className='h-[380px] w-[100%] rounded-[16px]  '>
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
                </div> */}
            </div>

        </div>
    )
}

export default Team