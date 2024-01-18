import logo from "./logo.svg";
import "./App.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'aos/dist/aos.css';

import Check from "./Check.js";
import { useEffect, useState } from "react";
import Aos from "aos";
import Bef from "./Loader/Bef";

function App() {
const [load ,setLoad]=useState(false);

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  setLoad('true')
});

  useEffect(() => {
    Aos.init({

once:true,
    });



    window.addEventListener('load', Aos.refresh);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('load', Aos.refresh);
    };
  // }, []);

  }, []);

  
  

  return (
    <>
    <SkeletonTheme baseColor="gray" highlightColor="#525252">
    <div className="App">
{

 load?<Check />:<Bef/>
}
     {/* </SkeletonTheme > */}
    </div>
    </SkeletonTheme>
    </>

);
}

export default App;
