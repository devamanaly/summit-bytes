import React from 'react'
import Pic from './Rectangle 3859.png'

const Team = () => {
    return (
        <div className='min-h-[100vh] w-full flex flex-col justify-center items-center gap-y-9  '>
            <h1 className='text-[50px] font-bold'>Our Value</h1>

            <div className='flex flex-row w-[84%] gap-x-4 flex-wrap gap-y-9 '>

                <div className='w-[32%] h-[479px] '>
                    <img src={Pic} alt="" style={{ width: "100%", height: "100%", borderRadius: "8px" }} />
                </div>
                <div className='w-[32%] h-[479px]  '>
                    <img src={Pic} alt="" style={{ width: "100%", height: "100%", borderRadius: "8px" }} />
                </div>
                <div className='w-[32%] h-[479px]  '>
                    <img src={Pic} alt="" style={{ width: "100%", height: "100%", borderRadius: "8px" }} />
                </div>
                <div className='w-[32%] h-[479px]  '>
                    <img src={Pic} alt="" style={{ width: "100%", height: "100%", borderRadius: "8px" }} />
                </div>
                <div className='w-[32%] h-[479px]  '>
                    <img src={Pic} alt="" style={{ width: "100%", height: "100%", borderRadius: "8px" }} />
                </div>
                <div className='w-[32%] h-[479px]  '>
                    <img src={Pic} alt="" style={{ width: "100%", height: "100%", borderRadius: "8px" }} />
                </div>


            </div>

            <button className=' py-4 px-14 bg-[#093F68] text-[20px] font-bold text-white '>
Join Our Dynamix Team
            </button>
        </div>
    )
}

export default Team