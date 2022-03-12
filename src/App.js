import './styles.scss'
import React, { useEffect } from 'react';
import { dataElement, dataTransform } from './data';
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import MotionPathPlugin from "gsap/MotionPathPlugin";

import Icon from './component/Icon';
import Summary from './component/Summary';
import RoundBLock from './component/RoundBlock';
import Gear from './component/Gear';
import { moveIcon } from './handler/AnimationHandler';
gsap.registerPlugin(Draggable, MotionPathPlugin);


function App() {

  // 用來判斷轉動的前一個角度或下一個角度
  var nextAngle = 0;
  var previousAngle = 0;

  useEffect(() => {

    // 設定初始的 summary
    gsap.to(`#smry-${dataElement[0].id}`, { opacity: 1 });

    // 設定 icon 與 roundBlock 的初始位置與大小
    dataElement.forEach((val, idx) => {
      gsap.set(`#icon-${val.id}`, {
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
          moveIcon('counterClockwise', dataElement, dataTransform);
          nextAngle = Math.ceil(snap) * 90; // 計算下一個 snap 角度
          previousAngle = Math.floor(snap) * 90; // 計算上一個 snap 角度
        } else if (this.rotation < previousAngle) {
          moveIcon('clockwise', dataElement, dataTransform);
          nextAngle = Math.ceil(snap) * 90; // 計算下一個 snap 角度
          previousAngle = Math.floor(snap) * 90; // 計算上一個 snap 角度
        }
      },
      onDragStart: function () {
        // 開始轉動時，將所有 summary 淡出
        dataElement.forEach((val, idx) => {
          gsap.to(`#smry-${dataElement[idx].id}`, { opacity: 0 });
        });
      },
      onDragEnd: function () {
        // 設定 300 毫秒後執行，避免移動太快讓 hitTest 偵測到兩個 icon-id
        const timeout = setTimeout(() => {

          // 轉動結束時，將 hitTest 到的 summary 淡入
          dataElement.forEach((val, idx) => {
            if (this.hitTest(`#icon-${val.id}`)) {
              gsap.to(`#smry-${dataElement[idx].id}`, { opacity: 1 });
            };
          });
        }, 300);
      }
    });

  }, []);

  return (
    <React.Fragment>
      {
        dataElement.map((val, idx) => (
          <React.Fragment key={idx}>
            <Icon key={`icon-${val.id}`} {...val} id={`icon-${val.id}`} />
            <Summary key={`smry-${val.id}`} {...val} id={`smry-${val.id}`} />
            <RoundBLock key={`rndBlock-${val.id}`} {...val} />
          </React.Fragment>
        ))
      }
      <Gear />
    </React.Fragment >
  );
}

export default App;
