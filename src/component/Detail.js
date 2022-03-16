import React from 'react';
import gsap from 'gsap';

function Detail({ detail = {} }) {
   const closeHandler = () => {
      gsap.to(detail, { display: 'none', opacity: 0 });
   };

   return (
      <React.Fragment>
         <h1>This is Detail</h1>
         <br />
         <button onClick={closeHandler}>X close</button>
      </React.Fragment>
   );
};

export default Detail;