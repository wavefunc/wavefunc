import React, { useEffect } from 'react';

function RndBlock({ seq = 0 }) {
   useEffect(() => {

      // 設定 round block 隨機 float animation
      var style = document.createElement('style');
      var rnmNumberX = (Math.random() * 21 + 40) * -1 // -40 ~ -60 的隨機數字
      var rnmNumberY = (Math.random() * 21 + 40) * -1 // -40 ~ -60 的隨機數字
      var keyFrames = `
         @keyframes float-rndBlock-${seq} {
            0% {
               transform: translate(-50%, -50%);
            }
            35% {
               transform: translate(${rnmNumberX}%, ${rnmNumberY}%);
            }
            65% {
               transform: translate(${rnmNumberY}%, ${rnmNumberX}%);
            }
            100% {
               transform: translate(-50%, -50%);
            }
         }
      `
      style.innerHTML = keyFrames;
      document.getElementsByTagName('head')[0].appendChild(style);
   }, []);

   return (
      <div
         className='rndBlock'
         style={{ animation: `float-rndBlock-${seq} 6s ease-in-out infinite` }}
      >
      </div>
   );
}

export default RndBlock;