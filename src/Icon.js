import React from 'react';

function Icon({ id = 0, src = ''}) {
   return (
      <React.Fragment>
         <img id={id} className='icon' src={src} />
      </React.Fragment>
   );
}

export default Icon;