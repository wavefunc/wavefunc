import React, { useEffect, useState } from 'react';
import { dataIconParams as iconParams, dataTransParams as transParams } from './data';
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import MotionPathPlugin from "gsap/MotionPathPlugin";

import Icon from './Icon';
import Summary from './Summary';
gsap.registerPlugin(Draggable, MotionPathPlugin);


function App() {
  // 用於判斷目前轉到哪一個 icon
  // const [currentIcon, setCurrentIcon] = useState(iconParams[0].summaryId);

  // 用來判斷轉動的前一個角度或下一個角度
  var nextAngle = 0;
  var previousAngle = 0;

  const moveIcon = (direction = 'clockwise') => {
    // 將 transParams 的最前一個移到最後面，會讓 icon 順時針轉，反之則逆時針轉
    if (direction == 'clockwise')
      transParams.push(transParams.shift());
    else
      transParams.unshift(transParams.pop());

    // 處理 icon 的旋轉動畫
    iconParams.forEach((val, idx) => {
      gsap.to(`#${val.id}`, { duration: 0.2, width: transParams[idx].width });
      gsap.to(`#${val.id}`, {
        motionPath: {
          path: [{ top: transParams[idx].top, left: transParams[idx].left }]
        },
        ease: "back",
        duration: 1,
      });
    });
  };

  useEffect(() => {
    // 設定初始的 summary
    gsap.to(`#${iconParams[0].summaryId}`, { opacity: 1 });

    // 設定 icon 的初始位置與大小
    iconParams.forEach((val, idx) => {
      gsap.set(`#${val.id}`, {
        width: transParams[idx].width, top: transParams[idx].top, left: transParams[idx].left
      });
    });

    // 設定齒輪可轉動
    Draggable.create("#gear", {
      type: "rotation",
      onDrag: function () {
        if (this.rotation > nextAngle) {
          moveIcon('clockwise');
          nextAngle = Math.ceil(this.rotation / 90) * 90;
          previousAngle = Math.floor(this.rotation / 90) * 90;
          gsap.to(`#${iconParams[Math.ceil(Math.floor(this.rotation / 90) % 8)].summaryId}`, { opacity: 0 });
          gsap.to(`#${iconParams[Math.ceil(Math.ceil(this.rotation / 90) % 8)].summaryId}`, { opacity: 1 });
          console.log(Math.ceil(Math.ceil(this.rotation / 90) % 8));
          console.log(Math.ceil(Math.floor(this.rotation / 90) % 8));
          console.log('....');
          // console.log(Math.ceil(Math.ceil(this.rotation / 90) / 8));

        } else if (this.rotation < previousAngle) {
          moveIcon('counterClockwise');
          nextAngle = Math.ceil(this.rotation / 90) * 90;
          previousAngle = Math.floor(this.rotation / 90) * 90;
          // gsap.to(`#summary-icon8`, { opacity: 1 });

        }
      }
    });

  }, []);

  return (
    <React.Fragment>
      {
        iconParams.map((val, idx) => (
          <React.Fragment key={idx}>
            <Icon key={val.id} {...val} />
            <Summary key={val.summaryId} {...val} />
          </React.Fragment>
        ))
      }
      <img id="gear" src="/assets/gear.svg" />
    </React.Fragment >
  );
}

export default App;
