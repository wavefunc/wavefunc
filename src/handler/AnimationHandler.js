import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);

// 用來判斷轉動的前一個角度或下一個角度
var nextAngle = 0;
var previousAngle = 0;

// 轉動 icon
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
};

// gear 轉動時 moveIcon，設定 snap 為 90度
export function rotateGear(e = {}, dataElement = {}, dataTransform = {}) {
   var snap = e.rotation / 90;

   if (e.rotation > nextAngle) {
      moveIcon('counterClockwise', dataElement, dataTransform);
      nextAngle = Math.ceil(snap) * 90; // 計算下一個 snap 角度
      previousAngle = Math.floor(snap) * 90; // 計算上一個 snap 角度
   } else if (e.rotation < previousAngle) {
      moveIcon('clockwise', dataElement, dataTransform);
      nextAngle = Math.ceil(snap) * 90; // 計算下一個 snap 角度
      previousAngle = Math.floor(snap) * 90; // 計算上一個 snap 角度
   }
};

// 顯示 summary
export function displaySummary(e = {}, dataElement = []) {
   // 設定 300 毫秒後執行，避免移動太快讓 hitTest 偵測到兩個 icon-id
   const timeout = setTimeout(() => {

      // 轉動結束時，將 hitTest 到的 summary 淡入
      dataElement.forEach((val, idx) => {
         if (e.hitTest(`#icon-${val.id}`)) {
            gsap.to(`#smry-${dataElement[idx].id}`, { opacity: 1, display: 'block' });
   };
});
   }, 300);

};