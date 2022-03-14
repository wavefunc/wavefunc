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
      // 設定齒輪可轉動
      Draggable.create("#gear", {
         type: "rotation",
         onDrag: function () {
            rotateGear(this, icons, dataTransform);
         },
         onDragStart: function () {
            // 開始轉動時，將所有 summary 淡出
            gsap.to('.summary', { display: 'none', opacity: 0 });
         },
         onDragEnd: function () {
            displaySummary(this, icons, summaries);
         }
      });

   });

   return (
      <React.Fragment>
         <div id="divLens">
            <img id='lens' src={`${process.env.PUBLIC_URL}/assets/lens.svg`} />
         </div>
         <div id="divGear">
            <img id="gear" src={`${process.env.PUBLIC_URL}/assets/gear.svg`} />
         </div>
      </React.Fragment>
   );
}

export default Gear;