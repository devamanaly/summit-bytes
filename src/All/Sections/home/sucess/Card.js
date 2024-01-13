import React from 'react'
import Pic1 from './pix1.png'
import Pic2 from './pix2.png'
import Pic3 from './pix3.png'
import Pic4 from './pix4.png'

import { FaArrowRight } from "react-icons/fa";

const Card = () => {
  return (
    <div className='flex flex-row gap-x-6 flex-wrap justify-start' >
    <div className='xl:h-[450px] xlg:h-[480px]  xlg:xlg:w-[23.5%] xl:w-[305px] flex flex-col justify-start items-start border border-black bg-[#E1F2FF] gap-y-4'>
      <div className='h-[285px] w-full border border-black'>
        <img src={Pic1} alt="no picture" className='w-full h-full' />

      </div>
      <h4 className='text-[20px] font-bold'>

        NewsPaper
      </h4>
      <div className='flex flex-col justify-start items-start gap-y-1'>
        <h5 className='text-[23px] font-normal'>Designing invisible interfaces</h5>
        <p className='text-[16px] font-normal'>Lörem ipsum nekängar didist nyvis rekaliga bokstavsdrog. Sesamma dir, mipydon: </p>
      </div>

      <div className='flex flex-row justify-center items-center text-[#093F68] gap-x-2 uppercase' >
        <a href="#" className='text-[17px] font-bold'>
          Read More
        </a>
        <FaArrowRight />

      </div>
    </div>

    {/* caard */}


    <div className='h-[480px] xlg:w-[24%] xl:w-[305px] flex flex-col justify-start items-start border border-black bg-[#E1F2FF] gap-y-4'>
      <div className='h-[285px] w-full border border-black'>
        <img src={Pic1} alt="no picture" className='w-full h-full' />

      </div>
      <h4 className='text-[20px] font-bold'>

        NewsPaper
      </h4>
      <div className='flex flex-col justify-start items-start gap-y-1'>
        <h5 className='text-[23px] font-normal'>Designing invisible interfaces</h5>
        <p className='text-[16px] font-normal'>Lörem ipsum nekängar didist nyvis rekaliga bokstavsdrog. Sesamma dir, mipydon: </p>
      </div>

      <div className='flex flex-row justify-center items-center text-[#093F68] gap-x-2 uppercase' >
        <a href="#" className='text-[17px] font-bold'>
          Read More
        </a>
        <FaArrowRight />

      </div>
    </div>

    {/* Card */}

    <div className='h-[480px] xlg:w-[24%] xl:w-[305px] flex flex-col justify-start items-start border border-black bg-[#E1F2FF] gap-y-4'>
      <div className='h-[285px] w-full border border-black'>
        <img src={Pic1} alt="no picture" className='w-full h-full' />

      </div>
      <h4 className='text-[20px] font-bold'>

        NewsPaper
      </h4>
      <div className='flex flex-col justify-start items-start gap-y-1'>
        <h5 className='text-[23px] font-normal'>Designing invisible interfaces</h5>
        <p className='text-[16px] font-normal'>Lörem ipsum nekängar didist nyvis rekaliga bokstavsdrog. Sesamma dir, mipydon: </p>
      </div>

      <div className='flex flex-row justify-center items-center text-[#093F68] gap-x-2 uppercase' >
        <a href="#" className='text-[17px] font-bold'>
          Read More
        </a>
        <FaArrowRight />

      </div>
    </div>

    {/* card */}

    <div className='h-[480px] xlg:w-[24%] xl:w-[305px] flex flex-col justify-start items-start border border-black bg-[#E1F2FF] gap-y-4'>
      <div className='h-[285px] w-full border border-black'>
        <img src={Pic1} alt="no picture" className='w-full h-full' />

      </div>
      <h4 className='text-[20px] font-bold'>

        NewsPaper
      </h4>
      <div className='flex flex-col justify-start items-start gap-y-1'>
        <h5 className='text-[23px] font-normal'>Designing invisible interfaces</h5>
        <p className='text-[16px] font-normal'>Lörem ipsum nekängar didist nyvis rekaliga bokstavsdrog. Sesamma dir, mipydon: </p>
      </div>

      <div className='flex flex-row justify-center items-center text-[#093F68] gap-x-2 uppercase' >
        <a href="#" className='text-[17px] font-bold'>
          Read More
        </a>
        <FaArrowRight />

      </div>
    </div>
    </div>

  )
}

export default Card