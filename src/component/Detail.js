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
         <Container className="detailContent">
            {contentSwitch(seq)}
         </Container>
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
            <Row>
               <Col><Image className="m-3 align-self-start" width="300px" thumbnail src="/assets/picture/edward.jpg" /></Col>
               <Col>
                  <p>【我的個性】
                     我是李冠樺，來自台中市，個性沉穩，善於思惟整理歸納要點，因此對於寫程式的架構與邏輯上的思考極有興趣。會觀察身邊的人有何需求，與伙伴之間的相處融洽。</p>
                  <p>【學習與工作歷程】
                     我畢業於國立中正大學資訊管理研究所，因對數位課程的發展有興趣，碩士論文研究影響數位學習品質的因素為何。在學時曾接觸 Java、C#、ASP.NET。畢業後因認同理念、希望為善的力量貢獻所能，進入福智佛教基金會中區事業部任職，負責維護資料庫，及各項課程與活動的規劃。</p>
                  <p>【工作期間】
                     因工作需求不斷自學 Microsoft SQL Server相關技能，也著手改善工作流程、提高效率。達成減少10萬筆會員資料的稀疏性並修正錯誤，及提供準確的分析數據。
                     期間參與總部建立新版系統的需求訪談、提供系統建置的建議、協助資料庫轉移，並規劃中區系統上線時程，協助3000位會員的操作需求。</p>
                  <p>【職涯規劃】
                     因深感所學不足，決定轉換職涯跑道，在前輩推薦下報名資展國際2021年10月的前端工程師課程，學習從基本網頁 JavaScript、後端 Node.js、RESTful API，到 React.js等前端技術。其中最感興趣的是 React.js，能拆分撰寫網頁元件，將程式邏輯與網頁元件結合，對分工也很有幫助。
                     期間也自學 Git 版本控制技術，並運用在小組專題。感謝每一位老師的教授，每天的學習都非常充實！未來對自己的期許是能成為一位全端工程師，運用學到的技術解決不同應用層面所遇到的問題！</p>
               </Col>
            </Row>
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