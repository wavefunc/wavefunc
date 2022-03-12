import './styles.scss'
import React, { useEffect } from 'react';
import { dataIconParams as iconParams, dataTransParams as transParams } from './data';
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import MotionPathPlugin from "gsap/MotionPathPlugin";

import Icon from './Icon';
import Summary from './Summary';
gsap.registerPlugin(Draggable, MotionPathPlugin);


function App() {
  // 用來判斷轉動的前一個角度或下一個角度
  var nextAngle = 0;
  var previousAngle = 0;

  const moveIcon = (direction = 'clockwise') => {
    // 將 transParams 的最前一個移到最後面，會讓 icon 順時針轉，反之則逆時針轉
    (direction == 'clockwise') ?
      transParams.push(transParams.shift()) :
      transParams.unshift(transParams.pop())

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
        var snap = this.rotation / 90;
        if (this.rotation > nextAngle) {
          moveIcon('counterClockwise');
          nextAngle = Math.ceil(snap) * 90; // 計算下一個 snap 角度
          previousAngle = Math.floor(snap) * 90; // 計算上一個 snap 角度
        } else if (this.rotation < previousAngle) {
          moveIcon('clockwise');
          nextAngle = Math.ceil(snap) * 90; // 計算下一個 snap 角度
          previousAngle = Math.floor(snap) * 90; // 計算上一個 snap 角度
        }
      },
      onDragStart: function () {
        // 開始轉動時，將所有 summary 淡出
        iconParams.forEach((val, idx) => {
          gsap.to(`#${iconParams[idx].summaryId}`, { opacity: 0 });
        });
      },
      onDragEnd: function () {
        // 轉動結束時，將 hitTest 到的 summary 淡入
        iconParams.forEach((val, idx) => {
          if (this.hitTest(`#${val.id}`)) {
            gsap.to(`#${iconParams[idx].summaryId}`, { opacity: 1 });
          };
        });
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
      <div id="divGear">
        <img id="gear" src="/assets/gear.svg" />
      </div>
    </React.Fragment >
  );
}

export default App;
