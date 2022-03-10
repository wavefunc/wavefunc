import React from 'react';

function Icon({ id = 0, src = '', width = 0, top = 0, left = 0 }) {
   return (
      <React.Fragment>
         <img id={id} className='icon' src={src} />
         <h2>{width}</h2>
      </React.Fragment>
   );
}

export default Icon;