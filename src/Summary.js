import React from 'react';

function Summary({ summaryId = 0, src = '' }) {
   return (
      <div id={summaryId} className='summary'>
         <h1>{summaryId}</h1>
         <p>沒了都在旅哈哈哈，還是覺現在我不無個一樣，人要來不及的時候讓人不真的很，也覺得有個符的打。</p>
      </div>
   );
}

export default Summary;