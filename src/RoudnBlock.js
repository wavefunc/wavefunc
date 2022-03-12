import React, { useEffect } from 'react';

function RoundBLock({ id = '' }) {
   return (
      <div id={`roundBLock-${id}`} className='roundBLock'></div>
   );
}

export default RoundBLock;