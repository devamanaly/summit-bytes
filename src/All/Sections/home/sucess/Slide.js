import React from "react";
import Slider from "react-slick";
import Pic1 from './pix1.png'
import Pic2 from './pix2.png'
import Pic3 from './pix3.png'
import Pic4 from './pix4.png'

import { FaArrowRight } from "react-icons/fa";
const Slide = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 576 ,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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
    <div className="w-[95vw] flex  xl:hidden  slide    justify-center items-center">

      <div className=" w-[90%] sm:w-full md:w-[90%] ">
        {/* <h2> Responsive </h2> */}
        <Slider {...settings} className="" >
          <div className=" sm:w-[405px]   " style={{height:"max-content"}}>

            <div className='xl:h-[450px] xlg:h-[480px] w-full  xlg:xlg:w-[23.5%] xl:w-[305px] md:w-[350px] h-[450px] sm:w-[300px]  flex flex-col justify-start items-start  bg-[#E1F2FF] gap-y-4' style={{height:"max-content"}} >
              <div className='md:h-[285px] h-[285px] sm:h-[200px] w-full '>
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
          <div className=" sm:w-[405px]   " style={{height:"max-content"}}>

            <div className='xl:h-[450px] xlg:h-[480px] w-full  xlg:xlg:w-[23.5%] xl:w-[305px] md:w-[350px] h-[450px] sm:w-[300px]  flex flex-col justify-start items-start  bg-[#E1F2FF] gap-y-4' style={{height:"max-content"}} >
              <div className='md:h-[285px] h-[285px] sm:h-[200px] w-full '>
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
          <div className=" sm:w-[405px]   " style={{height:"max-content"}}>

            <div className='xl:h-[450px] xlg:h-[480px] w-full  xlg:xlg:w-[23.5%] xl:w-[305px] md:w-[350px] h-[450px] sm:w-[300px]  flex flex-col justify-start items-start  bg-[#E1F2FF] gap-y-4' style={{height:"max-content"}} >
              <div className='md:h-[285px] h-[285px] sm:h-[200px] w-full '>
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
          <div className=" sm:w-[405px]   " style={{height:"max-content"}}>

            <div className='xl:h-[450px] xlg:h-[480px] w-full  xlg:xlg:w-[23.5%] xl:w-[305px] md:w-[350px] h-[450px] sm:w-[300px]  flex flex-col justify-start items-start  bg-[#E1F2FF] gap-y-4' style={{height:"max-content"}} >
              <div className='md:h-[285px] h-[285px] sm:h-[200px] w-full '>
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
          <div className=" sm:w-[405px]   " style={{height:"max-content"}}>

            <div className='xl:h-[450px] xlg:h-[480px] w-full  xlg:xlg:w-[23.5%] xl:w-[305px] md:w-[350px] h-[450px] sm:w-[300px]  flex flex-col justify-start items-start  bg-[#E1F2FF] gap-y-4' style={{height:"max-content"}} >
              <div className='md:h-[285px] h-[285px] sm:h-[200px] w-full '>
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
          <div className=" sm:w-[405px]   " style={{height:"max-content"}}>

            <div className='xl:h-[450px] xlg:h-[480px] w-full  xlg:xlg:w-[23.5%] xl:w-[305px] md:w-[350px] h-[450px] sm:w-[300px]  flex flex-col justify-start items-start  bg-[#E1F2FF] gap-y-4' style={{height:"max-content"}} >
              <div className='md:h-[285px] h-[285px] sm:h-[200px] w-full '>
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
          {/* <div> */}
      
          {/* <div> */}
          {/* <div className='xl:h-[450px] xlg:h-[480px]  xlg:xlg:w-[23.5%] xl:w-[305px]   flex w-[380px]flex-col justify-start items-start  bg-[#E1F2FF] gap-y-4'>
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
                </div> */}

          {/* </div> */}
          {/* <div> */}
          {/* <div className='xl:h-[450px] xlg:h-[480px]  xlg:xlg:w-[23.5%] xl:w-[305px] flex flex-col justify-start items-start  bg-[#E1F2FF] gap-y-4'>
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
          {/* </div> */}
          {/* <div> */}
          {/* <div className='xl:h-[450px] xlg:h-[480px]  xlg:xlg:w-[23.5%] xl:w-[305px] flex flex-col justify-start items-start  bg-[#E1F2FF] gap-y-4'>
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
                </div> */}
          {/* </div> */}
          {/* <div> */}
          {/* <div className='xl:h-[450px] xlg:h-[480px]  xlg:xlg:w-[23.5%] xl:w-[305px] flex flex-col justify-start items-start  bg-[#E1F2FF] gap-y-4'>
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
    </div> */}
          {/* </div> */}
          {/* <div> */}
          {/* <div className='xl:h-[450px] xlg:h-[480px]  xlg:xlg:w-[23.5%] xl:w-[305px] flex flex-col justify-start items-start  bg-[#E1F2FF] gap-y-4'>
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
    </div> */}
          {/* </div> */}
          {/* <div> */}
          {/* <div className='xl:h-[450px] xlg:h-[480px]  xlg:xlg:w-[23.5%] xl:w-[305px] flex flex-col justify-start items-start  bg-[#E1F2FF] gap-y-4'>
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
          {/* </div>  */}
        </Slider >
      </div >
    </div>

  );
};

export default Slide;
