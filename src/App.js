import logo from "./logo.svg";
import "./App.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import Check from "./Check.js";

function App() {
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
