// import './App.css';
import React, { useEffect } from 'react';
import { gsap } from 'gsap/all';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);


function App() {


  useEffect(() => {
    // gsap.to('#iconFloppy', {
    //   motionPath: {
    //     path: [{ x: 0, y: 0 }, { x: -150, y: -100 }, { x: -200, y: -200 }],
    //     // type: "cubic"
    //   },
    //   transformOrigin: "50% 50%",
    //   duration: 2,
    //   ease: "power1.inOut"
    // });
    gsap.from('#icon', { duration: 2, x: 500 });
  });

  return (
    <React.Fragment>
      <img id='icon1' className='icon' src="/assets/icon/donut.svg" />
      <img id='icon2' className='icon' src="/assets/icon/donut.svg" />
    </React.Fragment>
  );
}

export default App;
