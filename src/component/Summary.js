import React from 'react';

function Summary({ id = 0 }) {
   return (
      <div id={id} className='summary'>
         <h1>{id}</h1>
         <p>沒了都在旅哈哈哈，還是覺現在我不無個一樣，人要來不及的時候讓人不真的很，也覺得有個符的打。</p>
      </div>
   );
}

export default Summary;