// import { TypeAnimation } from 'react-type-animation';

// const ExampleComponent = () => {
//   return (
//     <TypeAnimation
//       sequence={[
//         // Same substring at the start will only be typed out once, initially
//         'We produce food for Mice',
//         1000, // wait 1s before replacing "Mice" with "Hamsters"
     
//       ]}
//       wrapper="span"
//       speed={50}
//       style={{ fontSize: '2em', display: 'inline-block' }}
//       repeat={Infinity}
//     />
//   );
// };
// export default ExampleComponent
import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
  
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return <span>{currentText}</span>;
};

export default Typewriter;