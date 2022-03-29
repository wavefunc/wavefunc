import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);

// 用來判斷轉動的前一個角度或下一個角度
var nextAngle = 0;
var previousAngle = 0;

// 轉動 icon
export function moveIcon(direction = 'clockwise', icons = [], dataTransform = []) {
   // 將 dataTransform 的最前一個移到最後面，會讓 icon 順時針轉，反之則逆時針轉
   (direction === 'clockwise') ?
      dataTransform.push(dataTransform.shift()) :
      dataTransform.unshift(dataTransform.pop())

   // 處理 icon 的旋轉動畫
   icons.forEach((val, idx) => {
      gsap.to(val, { duration: 0.2, width: dataTransform[idx].width });
      gsap.to(val, {
         motionPath: {
            path: [{ top: dataTransform[idx].top, left: dataTransform[idx].left }]
         },
         ease: "back",
         duration: 1,
      });
   });

};

// gear 轉動時 moveIcon，設定 snap 為 90度
export function rotateGear(e = {}, icons = [], dataTransform = {}) {
   var snap = e.rotation / 90;

   if (e.rotation > nextAngle) {
      moveIcon('counterClockwise', icons, dataTransform);
      nextAngle = Math.ceil(snap) * 90; // 計算下一個 snap 角度
      previousAngle = Math.floor(snap) * 90; // 計算上一個 snap 角度
   } else if (e.rotation < previousAngle) {
      moveIcon('clockwise', icons, dataTransform);
      nextAngle = Math.ceil(snap) * 90; // 計算下一個 snap 角度
      previousAngle = Math.floor(snap) * 90; // 計算上一個 snap 角度
   }
};

// 顯示 summary
export function displaySummary(e = {}, icons = [], summaries = []) {
   // 設定 300 毫秒後執行，避免移動太快讓 hitTest 偵測到兩個 icon-id
   const timeout = setTimeout(() => {

      icons.forEach((val, idx) => {
         if (e.hitTest(val)) {
            gsap.to(summaries[idx], { opacity: 1, display: 'block' });
            console.log('hit');
         }
      });
   }, 300);

};