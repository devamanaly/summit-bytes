import React from 'react'
// import Pic from './Rectangle 3859.png'
import Pic from './Ellipse 9.png'
const Founder = () => {
    return (
        <div className='w-full min-h-[100vh] flex flex-col justify-center items-center  pt-[50px]'>
            <h2 className='text-[45px] font-bold'>Our Founder and Co Founder</h2>
            <div className='w-full h-[600px] flex justify-center items-center xlg:gap-x-[158px] xl:gap-x-[60px] '>

                <div className=' w-[420px] h-[482px] flex flex-col justify-start items-center text-center gap-y-6   ' >
                    <div className='xlg:w-[398px] xlg:h-[398px] xl:w-[300px] xl:h-[300px]' style={{ borderRadius: "207px", boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}>

                        <img src={Pic} alt="" />
                    </div>
                    <div>

                        <p className='text-[25px]'>
                            Lörem ipsum nekängar
                        </p>
                        <p className='text-[20px] font-normal'>Lörem ipsum nekängar </p>
                    </div>

                </div>
                <div className=' w-[420px] h-[482px] flex flex-col justify-start items-center text-center gap-y-6  '>
                    <div className='xlg:w-[398px] xlg:h-[398px] xl:w-[300px] xl:h-[300px]' style={{ borderRadius: "207px", boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px' }}>

                        <img src={Pic} alt="" />
                    </div>
                    <div>

                        <p className='text-[25px]'>
                            Lörem ipsum nekängar
                        </p>
                        <p className='text-[20px] font-normal'>Lörem ipsum nekängar </p>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Founder