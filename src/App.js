import logo from "./logo.svg";
import "./App.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'aos/dist/aos.css';

import Check from "./Check.js";
import { useEffect } from "react";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init({
      // Global settings here
    });
  }, []);

  return (
    <>
    <SkeletonTheme baseColor="gray" highlightColor="#525252">
    <div className="App">

      <Check />
     {/* </SkeletonTheme > */}
    </div>
    </SkeletonTheme>
    </>

);
}

export default App;
