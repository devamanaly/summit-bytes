import React from 'react'
import Pic1 from './Frame (1).png'
import Pic2 from './Frame (2).png'
import Pic3 from './Frame (3).png'
import Pic4 from "./Frame (4).png"

const LeftCont = (props) => {
    const func=props.func;
    const state=props.state
    // console.log("i am i left"+state)
    


    return (
        <div className=' w-[220px] flex flex-col justify-center items-center  min-h-[500px] '>
            <div className={`w-[220px] h-[125px] hover:text-[#fff] hover:bg-[#093F68]  cursor-pointer border-b border-black flex text-[#6E6E6E] flex-col justify-center items-center gap-y-[10px]  `} style={{
                
                
                backgroundColor: state === 'e-commerece' ? '#093F68' : '',
                color: state === 'e-commerece' ? '#FFF' : '',
                transition: 'background-color 0.3s ease'
                
                
                
                
                }} onClick={()=>func("e-commerece")} >
                <div className='flex flex-row justify-start items-center  gap-x-[10px] '  >

                    <div className='w-[25px] h-[25px] '>
                        <img src={Pic1} alt="" />
                    </div>
                    <p className='uppercase xl:text-[14px] xlg:text-[17px] font-bold'>e-commerce</p>
                </div>

                <p className='uppercase xlg:text-[17px] xl:text-[12px] font-bold'>Development</p>

            </div>
            <div className='w-[220px] h-[125px] border-b hover:text-[#fff] hover:bg-[#093F68] border-black flex text-[#6E6E6E] flex-col justify-center items-center gap-y-[10px] cursor-pointer' style={{
                
                
                backgroundColor: state === 'web-app' ? '#093F68' : '',
                color: state === 'web-app' ? '#FFF' : '',
                transition: 'background-color 0.3s ease'
                
                
                
                
                }} onClick={()=>func("web-app")} >
                <div className='flex flex-row justify-start items-start  gap-x-[10px]' >

                    <div className='w-[25px] h-[25px] '>
                        <img src={Pic2} alt="" />
                    </div>
                    <p className='uppercase xlg:text-[17px] xl:text-[14px] font-bold'>Web App</p>
                </div>

                <p className='uppercase xlg:text-[17px] xl:text-[14px] font-bold'>Development</p>

            </div>
            <div className='w-[220px] h-[125px] hover:text-[#fff] hover:bg-[#093F68] border-b border-black flex text-[#6E6E6E] flex-col justify-center items-center gap-y-[10px] cursor-pointer' onClick={()=>func("product")}  style={{
                
                
                backgroundColor: state === 'product' ? '#093F68' : '',
                color: state === 'product' ? '#FFF' : '',
                transition: 'background-color 0.3s ease'
                
                
                
                
                }} >
                <div className='flex flex-row justify-start items-start  gap-x-[10px]'>

                    <div className='w-[25px] h-[25px] '>
                        <img src={Pic3} alt="" />
                    </div>
                    <p className='uppercase xlg:text-[17px] xl:text-[14px] font-bold'>Product</p>
                </div>

                <p className='uppercase xlg:text-[17px] xl:text-[14px] font-bold'>Development</p>

            </div>
            <div className='w-[220px] h-[125px] border-b hover:text-[#fff] hover:bg-[#093F68] border-black flex gap-y-[10px] text-[#6E6E6E] flex-col justify-center items-center cursor-pointer' onClick={()=>func("artifical")}   style={{
                
                
                backgroundColor: state === 'artifical' ? '#093F68' : '',
                color: state === 'artifical' ? '#FFF' : '',
                transition: 'background-color 0.3s ease'
                
                
                
                
                }}>
                <div className='flex flex-row justify-start items-start  gap-x-[10px]'>

                    <div className='w-[25px] h-[25px] '>
                        <img src={Pic4} alt="" />
                    </div>
                    <p className='uppercase xlg:text-[17px] xl:text-[14px] font-bold'>Artifical</p>
                </div>

                <p className='uppercase xlg:text-[17px] xl:text-[14px] font-bold'>Development</p>

            </div>

        </div>
    )
}

export default LeftCont
// bg-[#08759F]