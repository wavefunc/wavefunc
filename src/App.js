import './styles.scss'
import React, { useEffect } from 'react';
import { dataElement, dataTransform} from './data';
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import MotionPathPlugin from "gsap/MotionPathPlugin";

import Icon from './Icon';
import Summary from './Summary';
import RoundBLock from './RoudnBlock';
gsap.registerPlugin(Draggable, MotionPathPlugin);


function App() {
  // 用來判斷轉動的前一個角度或下一個角度
  var nextAngle = 0;
  var previousAngle = 0;

  const moveIcon = (direction = 'clockwise') => {
    // 將 dataTransform 的最前一個移到最後面，會讓 icon 順時針轉，反之則逆時針轉
    (direction == 'clockwise') ?
      dataTransform.push(dataTransform.shift()) :
      dataTransform.unshift(dataTransform.pop())

    // 處理 icon 的旋轉動畫
    dataElement.forEach((val, idx) => {
      gsap.to(`#${val.id}`, { duration: 0.2, width: dataTransform[idx].width });
      gsap.to(`#${val.id}`, {
        motionPath: {
          path: [{ top: dataTransform[idx].top, left: dataTransform[idx].left }]
        },
        ease: "back",
        duration: 1,
      });
    });
  };

  useEffect(() => {
    // 設定初始的 summary
    gsap.to(`#${dataElement[0].summaryId}`, { opacity: 1 });

    // 設定 icon 與 roundBlock 的初始位置與大小
    dataElement.forEach((val, idx) => {
      gsap.set(`#${val.id}`, {
        width: dataTransform[idx].width, top: dataTransform[idx].top, left: dataTransform[idx].left
      });
      // gsap.set(`#roundBlock-${val.id}`, {
      //   width: dataTransform[idx].width, top: dataTransform[idx].top, left: dataTransform[idx].left
      // });
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
        dataElement.forEach((val, idx) => {
          gsap.to(`#${dataElement[idx].summaryId}`, { opacity: 0 });
        });
      },
      onDragEnd: function () {
        // 轉動結束時，將 hitTest 到的 summary 淡入
        dataElement.forEach((val, idx) => {
          if (this.hitTest(`#${val.id}`)) {
            gsap.to(`#${dataElement[idx].summaryId}`, { opacity: 1 });
          };
        });
      }

    });

  }, []);

  return (
    <React.Fragment>
      {
        dataElement.map((val, idx) => (
          <React.Fragment key={idx}>
            <Icon key={val.id} {...val} />
            <Summary key={val.summaryId} {...val} />
            <RoundBLock key={`roundBlock-${val.id}`} {...val} />
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
