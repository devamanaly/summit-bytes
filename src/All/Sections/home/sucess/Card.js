import React from 'react'
import CardData from './CardData'
import Puc from './pix2.png'

import { FaArrowRight } from "react-icons/fa";

const Card = () => {
  return (



    <div className=' xl:flex flex-row xl:gap-x-[1%] xl:flex-wrap gap-y-7   justify-start hidden overflow-hidden   '  >






      {

        CardData.map((ele) => {
          return (



            <div className='min:xl:h-[450px] min:xlg:h-[480px]  xlg:w-[24%] xl:w-[305px] flex flex-col justify-start items-start  bg-[#E1F2FF] gap-y-4'>
              <div className='xlg;h-[327px] xl:h-[300px] w-full '>
                <img src={ele.img} alt="no " className='w-full h-full' />

              </div>
              <h4 className='text-[20px] font-bold'>

                {ele.imageDecription}
              </h4>
              <div className='flex flex-col justify-start items-start gap-y-1'>
                <h5 className='text-[23px] font-normal'>{ele.head}</h5>
                <p className='text-[16px] font-normal'>{ele.decription}</p>
              </div>

              <div className='flex flex-row justify-center items-center text-[#093F68] gap-x-2 uppercase' >
                <a href="#" className='text-[17px] font-bold'>
                  Read More
                </a>
                <FaArrowRight />

              </div>
            </div>


          )
        })
      }

    </div>

  )
}

export default Card