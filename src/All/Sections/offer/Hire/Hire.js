import React from 'react'
import Card from './Card'

const Hire = () => {
    return (

        <div className='min-h-[100vh] w-full flex flex-row justify-center items-center text-center'>
  

            <div className='min-h-[100vh] w-[100%] flex flex-col justify-center items-center text-center border border-black gap-y-[115px]'>

                <div className=' flex flex-col justify-start items-center gap-y-6'>
                    <h1 className='text-[#000] text-[45px]'>
                        Hire in 4 Simple Steps
                    </h1>

                    <p className='text-[#8492A6] w-[700px] text-[23px]'>Streamline your hiring process: four simple steps to find your next star
                        performer!</p>

                </div>



            <div className='w-full min-h-[20vh]' >
                <Card/>

            </div>
            </div>

        </div>
    )
}

export default Hire