import React, { useEffect } from 'react';
import gsap from "gsap";
import Draggable from "gsap/Draggable";
gsap.registerPlugin(Draggable);

function Gear({
   dataTransform = {},
   rotateGear = f => f,
   displaySummary = f => f,
   icons = [],
   summaries = []
}) {

   useEffect(() => {
      // 設定 divHitTest，用於偵測碰觸到 divHitTest 的 icon
      const divHitTest = Draggable.create('#divHitTest', { type: "rotation" });

      // 設定齒輪可轉動
      Draggable.create("#divGear", {
         type: "rotation",
         onDrag: function () {
            rotateGear(this, icons, dataTransform);
         },
         onDragStart: function () {
            // 開始轉動時，將所有 summary 淡出
            gsap.to('.summary', { display: 'none', opacity: 0 });
         },
         onDragEnd: function () {
            displaySummary(divHitTest[0], icons, summaries);
         }
      });

   });

   return (
      <React.Fragment>
         <div id="divLens">
            <img src={`${process.env.PUBLIC_URL}/assets/lens.svg`} />
         </div>
         <div id="divGear">
            <img src={`${process.env.PUBLIC_URL}/assets/gear.svg`} />
         </div>
         <div id="divHitTest"></div>
      </React.Fragment>
   );
}

export default Gear;