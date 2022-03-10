import React, { useEffect, useState } from 'react';
import { dataIconParams, dataTransParams } from './data';
import Icon from './Icon';
import { gsap } from 'gsap/all';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);


function App() {
  const [transParams, setTransParams] = useState(dataTransParams);

  useEffect(() => {
    gsap.to('#icon1', {
      motionPath: {
        path: [
          { top: '76vh', left: '31vw' },
          { top: '66vh', left: '20.8vh' },
          { top: '50.4vh', left: '10.6vw' }
        ],
      },
      ease: "back",
      duration: 1,
    });
    gsap.to('#icon1', { duration: 0.2, width: '3.6vw' });

    gsap.to('#icon2', {
      motionPath: {
        path: [
          { top: '50.4vh', left: '10.6vw' },
          { top: '35.475vh', left: '7.5vh' },
          { top: '30.5vh', left: '8.7vw' }
        ],
      },
      ease: "back",
      duration: 1,
    });
    gsap.to('#icon2', { duration: 1, width: '3.4vw' });
  });


  return (
    <React.Fragment>
      {
        dataIconParams.map((val, idx) => {
          return <Icon {...val} {...transParams[idx]} />
        })
      }
      <h1>{transParams[0].width}</h1>
    </React.Fragment>
  );
}

export default App;
