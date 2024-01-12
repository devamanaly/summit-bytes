import React from 'react';
import './style.css'; // Create a separate CSS file for styling

const Hexagon = ({text}) => {
  return (
    <div className="hexagon flex justify-center items-center ">
<p>{text}</p>
    
    </div>
  );
};

export default Hexagon;
