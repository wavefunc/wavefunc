import React, { useEffect } from 'react';
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import imgLens from '../assets/lens.svg';
import imgGear from '../assets/gear.svg';
gsap.registerPlugin(Draggable);

function Gear({
   dataElement = {},
   dataTransform = {},
   rotateGear = f => f,
   displaySummary = f => f
}) {

   useEffect(() => {
      // 設定齒輪可轉動
      Draggable.create("#gear", {
         type: "rotation",
         onDrag: function () {
            rotateGear(this, dataElement, dataTransform);
         },
         onDragStart: function () {
            // 開始轉動時，將所有 summary 淡出
            gsap.to('.summary', { opacity: 0 });
         },
         onDragEnd: function () {
            displaySummary(this, dataElement);
         }
      });

   });

   return (
      <React.Fragment>
         <div id="divLens">
            <img id='lens' src={imgLens} />
         </div>
         <div id="divGear">
            <img id="gear" src={imgGear} />+
         </div>
      </React.Fragment>
   );
}

export default Gear;