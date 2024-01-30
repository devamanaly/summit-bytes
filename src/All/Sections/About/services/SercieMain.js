import React from 'react'
import Item from './Item'

const SercieMain = () => {
  return (
    <div className='w-full min-h-[100vh] flex flex-col justify-center gap-y-6'>

        <div className='w-full min-h-[60vh] flex flex-col justify-center items-center gap-y-10 '>
            <h2 className='text-[45px] font-bold'>
                Web Development Service 
            </h2>
            <div className='flex flex-row  w-full min-h-[30px] justify-center gap-x-5 flex-wrap gap-y-11 '>
                <Item/>
                <Item/>
                <Item/>
                <Item/>

            </div>


        </div>
        <div className='w-full min-h-[60vh] flex flex-col justify-center items-center gap-y-10 '>
            <h2 className='text-[45px] font-bold'>
                Web Development Service 
            </h2>
            <div className='flex flex-row w-full min-h-30px justify-center gap-x-5 flex-wrap gap-y-11 '>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>

            </div>


        </div>
        <div className='w-full min-h-[60vh] flex flex-col justify-center items-center gap-y-10 '>
            <h2 className='text-[45px] font-bold'>
                Web Development Service 
            </h2>
            <div className='flex flex-row w-full min-h-30px justify-center gap-x-5 flex-wrap gap-y-11 '>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>

            </div>


        </div>


       

    </div>
  )
}

export default SercieMain