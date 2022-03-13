import React, { useEffect } from 'react';

function Icon({ id = '', src = '' }) {

   useEffect(() => {
      // 設定 icon 隨機 float animation
      var style = document.createElement('style');
      var rnmNumberX = (Math.random() * 21 + 40) * -1 // -40 ~ -60 的隨機數字
      var rnmNumberY = (Math.random() * 21 + 40) * -1 // -40 ~ -60 的隨機數字
      var keyFrames = `
         @keyframes float-${id} {
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
      <React.Fragment>
         <img
            id={id}
            className='icon'
            src={process.env.PUBLIC_URL + src}
            style={{ animation: `float-${id} 6s ease-in-out infinite` }}
         />
      </React.Fragment>
   );
}

export default Icon;