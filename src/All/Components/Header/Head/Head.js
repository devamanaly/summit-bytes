import React, { useState } from "react";
import Logo from './techjourneyer_72218_a_minimalistic_logo_SummitByte__ad_hoc_colo_de4dd38a-c598-49d1-a655-a24948db3565-removebg-removebg-preview (1).png'
import { CiMenuBurger } from "react-icons/ci";
import Menu from "../../menu/Menu";
import { useNavigate } from "react-router-dom";
const Head = ({functions}) => {




  const Hidden=()=>{
    const navigate=useNavigate()
    functions(true)
    navigate('/hiddenmenu')
  }
  return(



<div className="fixed w-[100vw] h-[100vh]">



  

    <div className=" w-[100vw ] border border-black h-[10vh] flex flex-row justify-between ">

      <div className="head-logo h-[100%] flex w-[10vw] justify-end">
        <img src={Logo} alt="" />

      </div>

      <div className=" meanu-btn w-[10vw] flex justify-center items-center  ">
      <CiMenuBurger style={{width:"34px", height:"34px", color:"white"}} onClick={Hidden} />
      </div>

    </div>

</div>


    )
};

export default Head;
