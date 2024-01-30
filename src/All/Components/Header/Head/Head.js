import React, { useState,useEffect } from "react";
import Logo from './techjourneyer_72218_a_minimalistic_logo_SummitByte__ad_hoc_colo_de4dd38a-c598-49d1-a655-a24948db3565-removebg-removebg-preview (1).png'
import { CiMenuBurger } from "react-icons/ci";
import Menu from "../../menu/Menu";
import { useNavigate } from "react-router-dom";
import './style.css'
const Head = ({ functions }) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    // Adjust the distance based on your requirements
    const scrollTrigger = 800;

    if (offset > scrollTrigger) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  

  const navigate = useNavigate()
  const Hidden = () => {
    functions(true)
    navigate('./hiddenmenu')
  }

  return (



    <nav className={`fixed w-[100vw] h-[10vh] ${scrolled ? 'scrolled' : ''} `} >





      <div className=" w-[100vw ]  h-full flex flex-row justify-between  ">

        <div className="head-logo h-[100%] flex w-[100px] justify-end">
          <img src={Logo} onClick={() => navigate('/')} alt="" />

        </div>

        <div className=" meanu-btn w-[10vw] flex justify-center items-center  ">
          <CiMenuBurger style={{ width: "34px", height: "34px", color:scrolled?"black":"white"      
          }} onClick={Hidden} />
        </div>

      </div>

    </nav>


  )
};

export default Head;
