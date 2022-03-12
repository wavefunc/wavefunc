import gsap from "gsap";
import Draggable from "gsap/Draggable";
import MotionPathPlugin from "gsap/MotionPathPlugin";
gsap.registerPlugin(Draggable, MotionPathPlugin);


export function moveIcon(direction = 'clockwise', dataElement = [], dataTransform = []) {
   // 將 dataTransform 的最前一個移到最後面，會讓 icon 順時針轉，反之則逆時針轉
   (direction == 'clockwise') ?
      dataTransform.push(dataTransform.shift()) :
      dataTransform.unshift(dataTransform.pop())

   // 處理 icon 的旋轉動畫
   dataElement.forEach((val, idx) => {
      gsap.to(`#icon-${val.id}`, { duration: 0.2, width: dataTransform[idx].width });
      gsap.to(`#icon-${val.id}`, {
         motionPath: {
            path: [{ top: dataTransform[idx].top, left: dataTransform[idx].left }]
         },
         ease: "back",
         duration: 1,
      });
   });

}

