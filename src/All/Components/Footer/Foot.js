import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Foot = () => {
    return (
        <div className='min-h-[388px] w-full bg-[#093F68] flex gap-y-10  justify-around items-start gap-x-[144px] flex-wrap py-14'>
            <div className='min-h-[388px] min-w-20 bg-[#093F68]  flex flex-col md:flex-row justify-center items-start gap-x-8 flex-wrap gap-y-9 xl:py-0'>


                <div className='w-[349px] min-h-52  flex flex-col justify-start items-start gap-y-8'>
                    <h2 className='text-[24px] text-white font-bold '>Contacts</h2>
                    <div className='flex flex-col justify-start items-start gap-y-5'>

                        <div className='flex flex-row justify-start items-center gap-x-11'>
                            <FaPhoneAlt style={{ color: "white", fontSize: "20px" }} />

                            <p className='xlg:text-[20px] xl:text-[18px] sm:text:[15px] text-[#B5B5B5]' >03443353402</p>

                        </div>
                        <div className='flex flex-row justify-start items-center gap-x-11'>
                            <MdMail style={{ color: "white", fontSize: "20px" }} />


                            <p className='xlg:text-[20px] xl:text-[18px] sm:text:[15px] text-[#B5B5B5]' >summitbytes@gmail.com</p>

                        </div>
                        <div className='flex flex-row justify-start items-center gap-x-11'>
                            <FaPhoneAlt style={{ color: "white", fontSize: "20px" }} />

                            <p className='xlg:text-[20px] xl:text-[18px] sm:text:[15px] text-[#B5B5B5]' >03443353402</p>

                        </div>
                        <div className='flex flex-row justify-start items-center gap-x-11'>
                            <FaLocationDot style={{ color: "white", fontSize: "20px" }} />

                            <p className='xlg:text-[20px] xl:text-[18px] sm:text:[15px] text-[#B5B5B5]' >132 Dartmouth Street Boston, Massachusetts 02156 United States</p>

                        </div>


                    </div>


                </div>


                <div className='min-h-52 min-w-[39px] flex flex-col justify-start items-start gap-y-8 ' >
                    <h2 className='text-[24px] text-white font-bold '>Company</h2>

                    <div className='flex flex-col gap-y-5' >
                        <Link to="/about" className='xlg:text-[20px] xl:text-[18px] sm:text:[15px]  text-[#B5B5B5] hover:text-white  
                        transition-all duration-500'>About</Link>
                        <Link to="/whatwe" className='xlg:text-[20px] xl:text-[18px] sm:text:[15px] text-[#B5B5B5] hover:text-white  
                        transition-all duration-500'>Services</Link>
                        <Link to="/contact" className='xlg:text-[20px] xl:text-[18px] sm:text:[15px] text-[#B5B5B5] hover:text-white  
                        transition-all duration-500'>Features</Link>
                        <a href="#" className='xlg:text-[20px] xl:text-[18px] sm:text:[15px] text-[#B5B5B5] hover:text-white  
                        transition-all duration-500'>Blogs</a>

                    </div>



                </div>


            </div>
            <div className='w-[349px] h-[249px] bg-[#0A0077] rounded-[20px]  flex-col justify-center gap-y-14 flex md:hidden xlg:flex' style={{ paddingLeft: "24px" }}>
                <h4 className='xlg:text-[20px] xl:text-[18px] sm:text:[15px] font-normal text-white '>Join Our Newsletter</h4>


                <div className=' flex flex-col justify-start items-start gap-y-3 '>
                    <div className='w-[80%] h-[36px] border border-white flex flex-row justify-start items-start'>
                        <input type="text" style={{ height: "100%", width: "183px", paddingLeft: "14px", color: "#494949", }} className='foucs-visible:border-none focus-visible:outline-none' placeholder='Your Email Address' />
                        <button className='w-[111px] h-full bg-[rgba(0, 70, 255, 0.30)] text-black bg-[#009dff] '>
                            Subscribe
                            {/* background: ; */}

                        </button>




                    </div>
                    <p className='text-[#C5C2C2]'>*  Will send you weekly updates for your better       tool management.</p>


                </div>

            </div>
        </div>
    )
}

export default Foot