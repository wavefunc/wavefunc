import React, { useEffect } from 'react';

function Icon({ id = 0, src = '', randomX = 50, randomY = 50 }) {

   useEffect(() => {
      var style = document.createElement('style');
      var rnmNumber = (Math.random() * 21 + 40) * -1 // -40 ~ -60 的隨機數字
      var keyFrames = `
         @keyframes float-${id} {
            0% {
               transform: translate(-50%, -50%);
            }
            50% {
               transform: translate(${rnmNumber}%, ${rnmNumber}%);
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
            src={src}
            style={{ animation: `float-${id} 6s ease-in-out infinite` }}
         />
      </React.Fragment>
   );
}

export default Icon;