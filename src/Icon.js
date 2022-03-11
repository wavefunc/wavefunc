import React from 'react';

function Icon({ id = 0, src = '' }) {
   return (
      <React.Fragment>
         <img id={id} className='icon' src={src} alt={id} />
      </React.Fragment>
   );
}

export default Icon;