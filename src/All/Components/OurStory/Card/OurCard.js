import React, { useState } from 'react'
// import Pic from "./cardImg.png"
import CardData from './CardData'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const OurCard = () => {

    const [time, setTime] = useState(false)

    setTimeout(() => {
        setTime(true)
    }, 1000)

    return (
        CardData.map((ele) => {
            return (


                <div className='xlg:w-[613px] xl:w-[473px] md:w-[400px] min-h-[300px] md:min-h-[521px]  flex flex-col justify-between items-start md:gap-y-8 gap-y-5 '>
                    <div className='w-[96%]'>

                        {

                            time == false ? <Skeleton count={1} style={{ width: "100%", height: "100%" }} /> : <h2 className='md:text-[3rem] sm:text-[40px] text-[35px] font-bold' >

                                {ele.head}

                            </h2>
                        }
                    </div>
                    <div className='w-[96%] xlg:h-[400px] xl:h-[300px] md:h-[280px] h-auto sm:h-auto'  >

                        {

                            time == false ? <Skeleton style={{ width: "100%", height: "100%" }} /> : <img src={ele.img} alt="issue" style={{ width: "100%", height: "100%" }} />
                        }




                        {/* <Skeleton /> */}

                    </div>
                    <div className='w-[96%]'>
                        {

                            time == false ? <Skeleton count={4} height={20} style={{ width: "100%" }} /> : <p className=' xlg:text-[22px] xl:text-[18px] w-[100%] ' >{ele.para}</p>
                        }
                    </div>


                    {

                        time == false ? <Skeleton height={36} width={110} style={{ width: "100%" }} /> : <div className='flex justify-center items-center bg-[#08759F] px-5 py-2 text-[#FFFFFF] text-[17px] font-normal cursor-pointer xl-w-[110px] xl:h-[36px] hover:border hover:border-black hover:bg-transparent hover:text-black transition-all duration-200  ' >

                            <p  >Read More</p>


                        </div>
                        }

        </div>
            )
        })
    )
}

export default OurCard