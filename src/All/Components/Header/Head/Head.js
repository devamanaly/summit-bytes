import React, { useState, useEffect } from "react";
import Logo from './output-onlinepngtools (1) (1).svg'
import { CiMenuBurger } from "react-icons/ci";
import Menu from "../../menu/Menu";
import { useNavigate } from "react-router-dom";
import './style.css'
const Head = ({ functions }) => {
  const [scrolled, setScrolled] = useState(false);
  const [hidenMenu, setHiddenMenu] = useState(false)

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




  console.log(hidenMenu)

  const navigate = useNavigate()
  const Hidden = () => {
    setHiddenMenu(true)
    // navigate('./hiddenmenu')
  }

  return (
    <div className={`fixed ${hidenMenu?'z-50':'' }`} >



        <nav className={`fixed w-[100vw] h-[10vh] ${scrolled ? 'scrolled' : ''}  ${hidenMenu?'z-20':'z-30'}`} >





          <div className=" w-[100vw ]  h-full flex flex-row justify-between  ">

            <div className="head-logo h-[100%] flex w-[100px] justify-end">
              <img src={Logo} onClick={() => navigate('/')} alt="" />

            </div>

            <div className=" meanu-btn w-[10vw] flex justify-center items-center  ">
              <CiMenuBurger style={{
                width: "34px", height: "34px", color: scrolled ? "black" : "white"
              }} onClick={Hidden} />
            </div>

          </div>

        </nav>
        <div className="w-[100vw] h-[100vh] fixed z-20  ">

        {

          hidenMenu ? <Menu funx={setHiddenMenu} stat={hidenMenu} /> : ""
        }

      </div>
    </div>

  )
};

export default Head;
