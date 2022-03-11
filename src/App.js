import React, { useEffect, useState } from 'react';
import { dataIconParams as iconParams, dataTransParams as transParams } from './data';
import Icon from './Icon';
import { gsap } from 'gsap/all';
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);


function App() {

  const moveIcon = () => {
    // 將 transParams 的最前一個移到最後面，會讓 icon 順時針轉
    transParams.push(transParams.shift());

    // // 將 transParams 的最後一個移到最前面，會讓 icon 逆時針轉
    // transParams.unshift(transParams.pop());

    // 處理 icon 的旋轉動畫
    iconParams.forEach((val, idx) => {
      gsap.to(`#${val.id}`, {
        motionPath: {
          path: [
            // {top:, left:} // clockWise
            { top: transParams[idx].top, left: transParams[idx].left }
          ],
        },
        ease: "back",
        duration: 1,
      });
      gsap.to(`#${val.id}`, { duration: 0.2, width: transParams[idx].width });
    });
  };

  return (
    <React.Fragment>
      {
        iconParams.map((val, idx) => {
          return <Icon key={val.id} {...val} {...transParams[idx]} />
        })
      }
      <button onClick={() => moveIcon()}>按鈕</button>
    </React.Fragment>
  );
}

export default App;
