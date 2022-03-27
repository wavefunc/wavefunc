import React from 'react';
import gsap from 'gsap';
import { Image, CloseButton, Container, Row, Col } from 'react-bootstrap'

function Detail({ seq = 0, detail = {}, dataElement = "" }) {
   const closeHandler = () => {
      gsap.to(detail, { display: 'none', opacity: 0 });
   };

   return (
      <React.Fragment>
         <div className="detailNav">
            <h1>{titleSwitch(seq)}</h1>
            <img src={dataElement} />
            <CloseButton className="closeButton btn-lg" aria-label="Close" onClick={closeHandler} />
         </div>
         <div className="detailContent d-flex p-2 flex-wrap flex-md-nowrap">
            {contentSwitch(seq)}
         </div>
         <div className="detailFooter"></div>
      </React.Fragment>
   );
};

function titleSwitch(seq) {
   switch (seq) {
      case 0:
         return "關於我"
      case 4:
         return "更多"
      default:
         return ""
   }
};

function contentSwitch(seq) {
   switch (seq) {
      case 0:
         return (
            <React.Fragment>
               <div className='order-2 m-3'>
                  <h2>我的個性</h2>
                  <p>我是李冠樺，來自台中市，個性沉穩，善於思惟整理歸納要點，因此對於寫程式的架構與邏輯上的思考極有興趣。會觀察身邊的人有何需求，與伙伴之間的相處融洽。</p>
               </div>
               <Image className="order-1 m-3" width="300px" src="/assets/picture/edward.jpg" />
            </React.Fragment>
         );
      case 4:
         return (
            <React.Fragment>
               <h1>更多</h1>
            </React.Fragment>
         );
      default:
         return (<div />);
   }
};

export default Detail;