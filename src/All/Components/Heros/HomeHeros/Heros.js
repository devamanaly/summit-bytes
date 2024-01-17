import React from "react";
import './style.css'
// import HerosImg from './techjourneyer_72218_make_a_picture_of_a_deep_ai_code_and_a_attr_f5d1e153-8432-42ca-b389-86da2fc579ca 1.png'
import Typewriter from "../Typewriter";
const Heros = () => {
  // const img = './techjourneyer_72218_make_a_picture_of_a_deep_ai_code_and_a_attr_f5d1e153-8432-42ca-b389-86da2fc579ca 1.png'
  return (
    <div>
      <div
        className=" heros-main w-[100vw]  h-[100vh]  flex flex-col justify-center items-center"

      >

        {/* Text Start */}

        <p className="text-white w-[80%] text-popins xl:text-[56px] xlg:text-[63px] h-[189px] font-semibold leading-normal   text-center "  data-aos="fade-down"> 
        <Typewriter text={"YOUR GATEWAY TO DIVERSE  SERVICES &  UNPARALLELED SOLUTIONS"} delay={100} />
        
        </p>
        <p data-aos="fade-up" className="text-[24px] text-[#E0E0E0] font-neutron font-[400] w-[600px] text-center">Lörem ipsum nekängar didist nyvis rekaliga bokstavsdrog. Sesamma dir, mipydon: </p>

        {/* Text End */}

        {/* buttons start*/}
        <div className="flex flex-row justify-center items-center mt-5 gap-x-4" data-aos="fade-up">
          <div className=" flex justify-center items-center   cursor-pointer px-7 py-3 bg-[#1E3C84] text-white text-center text-[18px] font-[400] hover:bg-white hover:text-black transition-all duration-500 ease">
            <p className=" xl:text-[18px] xlg:text-[22px] font-[600] ">Show Services</p>

          </div>

          <div className="flex justify-center items-center  px-7 py-3 cursor-pointer text-white text-center text-[18px] font-[400] hover:bg-white hover:text-black transition-all duration-500 ease">
            <p className="xl:text-[18px] xlg:text-[22px] font-[600] ">See More</p>

          </div>

        </div>
        {/* buttons end*/}
        {/* Last Right Start */}

        <div className="w-full flex justify-end items-center h-[5.375rem] mt-3 " data-aos="fade-up">
          <div className=" flex flex-row w-[28.5rem]  h-full bg:[rgba(255, 255, 255, 0.10)]">
            <div style={{width:"0", height:"0" , borderLeft:"5vw solid transparent", borderBottom:"4.6vw solid #FFFFFF1A" }}>

            </div>


           <div className="w-[95%] flex justify-start items-center" style={{backdropFilter:"blur(12px)", backgroundColor:"#FFFFFF1A"}}>
            <p className="text-[36px] text-white pl-1 font-normal " > We Deliver Results</p>
           </div>

          </div>
        </div>
        {/* Last Right End */}


      </div>
    </div>
  );
};

export default Heros;
// w-[12.8rem]
// h-[48px]