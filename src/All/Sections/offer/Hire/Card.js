import React from 'react'
import './style.css'
const Card = () => {
    return (
        <div className=' w-full  min-h-[60vh]' id='hire-card1'>

            <div className='card-left w-[50.1%] ' >

                <div className='  w-[602px] bg-[#DAE2E8] h-[256px] border border-black flex justify-center items-center rounded-[20px]' >
                    <div className='w-[80%]  flex flex-col h-full  justify-center items-center text-left '>

                        <div className='w-full flex justify-end items-center '>
                            <div className='w-[55px] h-[30px] bg-[#093F68] flex justify-center items-center rounded-[15px]'>
                                <p className='text-[20px] text-white'>1</p>
                            </div>

                        </div>


                        <p className='text-[#093F68] w-full text-[25px] font-bold' >Share your requirements</p>
                        <p className='text-[#8492A6] text-[20px]' > Tell us the skills you need and we'll find the best developer for you in Hours, not days</p>


                    </div>
                </div>


                <div className='w-[20px] rounded-[50px] absolute h-[20px]' style={{ transform: "translate(761px,-140px)", backgroundColor: "black" }}>

                </div>

            </div>
            <div className=' card-right w-[50%] ' >
                <div className='  w-[602px] bg-[#DAE2E8] h-[256px] border border-black flex justify-center items-center rounded-[20px]' id='hire-card2'>
                    <div className='w-[80%]  flex flex-col h-full  justify-center items-center text-left '>

                        <div className='w-full flex justify-end items-center '>
                            <div className='w-[55px] h-[30px] bg-[#093F68] flex justify-center items-center rounded-[15px]'>
                                <p className='text-[20px] text-white'>1</p>
                            </div>

                        </div>


                        <p className='text-[#093F68] w-full text-[25px] font-bold' >Share your requirements</p>
                        <p className='text-[#8492A6] text-[20px]' > Tell us the skills you need and we'll find the best developer for you in Hours, not days</p>


                    </div>

                </div>
                <div className='w-[20px] rounded-[50px] absolute h-[20px]' style={{ transform: "translate(-78px,-140px)", backgroundColor: "#093F68" }}>

                </div>
            </div>
            <div className='card-left w-[50.1%]  ' >

                <div className='  w-[602px] bg-[#DAE2E8] h-[256px]  flex justify-center items-center rounded-[20px]' id='hire-card3' >
                    <div className='w-[80%]  flex flex-col h-full  justify-center items-center text-left '>

                        <div className='w-full flex justify-end items-center '>
                            <div className='w-[55px] h-[30px] bg-[#093F68] flex justify-center items-center rounded-[15px]'>
                                <p className='text-[20px] text-white'>1</p>
                            </div>

                        </div>


                        <p className='text-[#093F68] w-full text-[25px] font-bold' >Share your requirements</p>
                        <p className='text-[#8492A6] text-[20px]' > Tell us the skills you need and we'll find the best developer for you in Hours, not days</p>


                    </div>
                </div>
                <div className='w-[20px] rounded-[50px] absolute h-[20px]' style={{ transform: "translate(761px,-140px)", backgroundColor: "#093F68" }}>

                    {/* </div> */}
                </div>
            </div>
            <div className=' card-right w-[50%] ' >

                <div className='w-[602px] bg-[#DAE2E8] h-[256px] border border-black flex justify-center items-center rounded-[20px] ' id='hire-card1' >
                    <div className='w-[80%]  flex flex-col h-full  justify-center items-center text-left '>

                        <div className='w-full flex justify-end items-center '>
                            <div className='w-[55px] h-[30px] bg-[#093F68] flex justify-center items-center rounded-[15px]'>
                                <p className='text-[20px] text-white'>1</p>
                            </div>

                        </div>


                        <p className='text-[#093F68] w-full text-[25px] font-bold' >Share your requirements</p>
                        <p className='text-[#8492A6] text-[20px]' > Tell us the skills you need and we'll find the best developer for you in Hours, not days</p>


                    </div>
                </div>
                <div className='w-[20px] rounded-[50px] absolute h-[20px]' style={{ transform: "translate(-78px,-140px)", backgroundColor: "#093F68" }}>

                </div>
            </div>


        </div>
    )
}

export default Card