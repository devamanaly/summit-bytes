import React from 'react'
import TeamData from './TeamData'
const Team = () => {
    return (
        <div className='min-h-[100vh] w-full flex flex-col justify-center items-center gap-y-9 py-7  '>
            <h1 className='text-[50px] font-bold'>Our Value</h1>

            <div className='flex md:flex-row flex-col w-[84%] justify-center items-center xl:gap-x-4 md:gap-x-8  gap-y-9  flex-wrap'>
                {
                    TeamData.map((ele) => {
                        return (



                            <div className='md:w-[400px] sm:w-[60%] w-[90%] h-[479px] overflow-hidden  '>
                                <img src={ele.img} alt="" className='  h-full object-cover' style={{ width: "100%",  borderRadius: "8px" }} />
                            </div>
                        )
                    })
                }



            </div>

            <button className=' py-4 px-14 bg-[#093F68] text-[20px] font-bold text-white '>
                Join Our Dynamix Team
            </button>
        </div>
    )
}

export default Team