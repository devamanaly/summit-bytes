import React from "react";
import Slider from "react-slick";
import Pic1 from './pix1.png'
import Pic2 from './pix2.png'
import Pic3 from './pix3.png'
import Pic4 from './pix4.png'

import { FaArrowRight } from "react-icons/fa";
const Responsive = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="h-[50vh] w-[80vw] border border-black">
            <h2> Responsive </h2>
            <Slider {...settings} className="border border-black" >
                {/* <div className="w-[445px]"> */}
                <div className='xl:h-[450px] xlg:h-[480px]  xlg:xlg:w-[23.5%] xl:w-[305px] flex flex-col justify-start items-start  bg-[#E1F2FF] gap-y-4'>
                    <div className='h-[285px] w-full '>
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
                    {/* </div> */}

                </div>
                {/* <div> */}
                <div className='xl:h-[450px] xlg:h-[480px]  xlg:xlg:w-[23.5%] xl:w-[305px] flex flex-col justify-start items-start  bg-[#E1F2FF] gap-y-4'>
                    <div className='h-[285px] w-full '>
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

                {/* </div> */}
                {/* <div> */}
                <div className='xl:h-[450px] xlg:h-[480px]  xlg:xlg:w-[23.5%] xl:w-[305px] flex flex-col justify-start items-start  bg-[#E1F2FF] gap-y-4'>
                    <div className='h-[285px] w-full '>
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

                {/* </div> */}
                {/* <div> */}
                <div className='xl:h-[450px] xlg:h-[480px]  xlg:xlg:w-[23.5%] xl:w-[305px] flex flex-col justify-start items-start  bg-[#E1F2FF] gap-y-4'>
                    <div className='h-[285px] w-full '>
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
                    {/* </div> */}
                </div>
                {/* <div> */}
                <div className='xl:h-[450px] xlg:h-[480px]  xlg:xlg:w-[23.5%] xl:w-[305px] flex flex-col justify-start items-start  bg-[#E1F2FF] gap-y-4'>
                    <div className='h-[285px] w-full '>
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
        {/* </div> */}
                {/* <div> */ }
    <div className='xl:h-[450px] xlg:h-[480px]  xlg:xlg:w-[23.5%] xl:w-[305px] flex flex-col justify-start items-start  bg-[#E1F2FF] gap-y-4'>
        <div className='h-[285px] w-full '>
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
    {/* </div> */ }
    {/* <div> */ }
    <div className='xl:h-[450px] xlg:h-[480px]  xlg:xlg:w-[23.5%] xl:w-[305px] flex flex-col justify-start items-start  bg-[#E1F2FF] gap-y-4'>
        <div className='h-[285px] w-full '>
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
    {/* </div> */ }
    {/* <div> */ }
    <div className='xl:h-[450px] xlg:h-[480px]  xlg:xlg:w-[23.5%] xl:w-[305px] flex flex-col justify-start items-start  bg-[#E1F2FF] gap-y-4'>
        <div className='h-[285px] w-full '>
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
        {/* </div> */}
    </div>
            </Slider >
        </div >
    );
};

export default Responsive;
