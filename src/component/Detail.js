import React from 'react';
import gsap from 'gsap';

function Detail({ seq = 0, detail = {} }) {
   const closeHandler = () => {
      gsap.to(detail, { display: 'none', opacity: 0 });
   };

   switch (seq) {
      case 0:
         return (
            <React.Fragment>
               <h1>關於我</h1>
               <br />
               <button onClick={closeHandler}>X close</button>
            </React.Fragment>
         );
      case 4:
         return (
            <React.Fragment>
               <h1>更多</h1>
               <br />
               <button onClick={closeHandler}>X close</button>
            </React.Fragment>
         );
      default:
         return (<div />);
   }
};

export default Detail;