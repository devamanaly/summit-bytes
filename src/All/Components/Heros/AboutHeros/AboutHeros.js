import React from "react";
import './style.css'
import HerosImg from './techjourneyer_72218_make_a_picture_of_a_deep_ai_code_and_a_attr_f5d1e153-8432-42ca-b389-86da2fc579ca 1.png'
const AboutHeros = () => {
  const img = './techjourneyer_72218_make_a_picture_of_a_deep_ai_code_and_a_attr_f5d1e153-8432-42ca-b389-86da2fc579ca 1.png'
  return (
    <div>
      <div
        className=" heros-main w-[100vw] border border-black h-[85vh]  flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${HerosImg})` }}
      >

        {/* Text Start */}

        <p className="text-white text-popins text-[63px] font-semibold leading-normal w-[58vw]  text-center " > About Us</p>
        <p className="text-[24px] text-[#E0E0E0] font-neutron font-[400] w-[600px] text-center">Lörem ipsum nekängar didist nyvis rekaliga bokstavsdrog. Sesamma dir, mipydon: </p>

        {/* Text End */}

        {/* buttons start*/}
        <div className="flex flex-row justify-center items-center mt-5">
          <div className=" flex justify-center items-center  px-7 py-3 bg-[#1E3C84] text-white text-center text-[18px] font-[400]">
            <p className="text-[22px] font-[600]">Show Services</p>

          </div>

          <div className="flex justify-center items-center  px-7 py-3 text-white text-center text-[18px] font-[400]">
            <p className="text-[22px] font-[600]">See More</p>

          </div>

        </div>
        {/* buttons end*/}
        {/* Last Right Start */}

        <div className="w-full flex justify-end items-center h-[5.375rem] mt-3 ">
          <div className=" flex flex-row w-[28.5rem]  h-full bg:[rgba(255, 255, 255, 0.10)]">
            <div style={{width:"0", height:"0" , borderLeft:"5vw solid transparent", borderBottom:"4.6vw solid #FFFFFF1A" }}>

            </div>


           <div className="w-[95%] flex justify-start items-center" style={{backdropFilter:"blur(12px)", backgroundColor:"#FFFFFF1A"}}>
            <p className="text-[36px] text-white pl-1 font-normal " >Know About Us</p>
           </div>

          </div>
        </div>
        {/* Last Right End */}


      </div>
    </div>
  );
};

export default AboutHeros;
// w-[12.8rem]
// h-[48px]