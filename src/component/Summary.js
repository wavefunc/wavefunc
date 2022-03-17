import React from 'react';
import { Badge, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJsSquare, faBootstrap, faReact, faVuejs, faNodeJs, faPhp, faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons'
import gsap from "gsap";

function Summary({ seq = 0, detail = {} }) {
   const btnHandler = () => {
      gsap.to(detail, { opacity: 1, display: 'block' });
   };

   switch (seq) {
      case 0:
         return (
            <React.Fragment>
               <Row>
                  {/* 0 簡介 */}
                  <h4>李冠樺 Edward</h4>
                  <p>
                     擅於架構性思惟、對前端懷抱熱情<br />
                     認為最好的學習方法就是分享所學<br />
                     耐心溝通、互助成長
                  </p>
               </Row>
               {/* <Row>
                  <Col>
                     <button className="smryBtn" onClick={btnHandler}>關於我</button>
                  </Col>
               </Row> */}
            </React.Fragment>
         );
      case 1:
         return (
            <React.Fragment>
               {/* 1 經歷 */}
               <h4>經歷</h4>
               <p>
                  國立中正大學 資訊管理研究所 畢業<br />
                  福智佛教基金會中區事業部 資料庫管理人員 5年半<br />
                  目前於 資策會前端工程師養成班 學習
               </p>
            </React.Fragment>
         );
      case 2:
         return (
            <React.Fragment>
               <Row>
                  {/* 2 Front-End */}
                  <h4>Front-End</h4>
                  <div>
                     <Badge className='p-2 m-1' bg="secondary"><FontAwesomeIcon icon={faHtml5} />&nbsp;HTML</Badge>
                     <Badge className='p-2 m-1' bg="secondary"><FontAwesomeIcon icon={faCss3Alt} />&nbsp;CSS</Badge>
                     <Badge className='p-2 m-1' bg="secondary"><FontAwesomeIcon icon={faBootstrap} />&nbsp;Bootstrap</Badge>
                     <br />
                     <Badge className='p-2 m-1' bg="secondary"><FontAwesomeIcon icon={faJsSquare} />&nbsp;JavaScript</Badge>
                     <Badge className='p-2 m-1' bg="secondary">jQuery</Badge>
                     <br />
                     <Badge className='p-2 m-1' bg="secondary"><FontAwesomeIcon icon={faReact} />&nbsp;React</Badge>
                     <Badge className='p-2 m-1' bg="secondary"><FontAwesomeIcon icon={faVuejs} />&nbsp;Vue.js</Badge>
                     <br />
                  </div>
               </Row>
            </React.Fragment>
         );
      case 3:
         return (
            <React.Fragment>
               <Row>
                  <Col sm={6}>
                     {/* 3 Back-End */}
                     <h4>Back-End</h4>
                     <Badge className='p-2 m-1' bg="secondary"><FontAwesomeIcon icon={faNodeJs} />&nbsp;Node.js</Badge>
                     <Badge className='p-2 m-1' bg="secondary"><FontAwesomeIcon icon={faPhp} />&nbsp;PHP</Badge>
                     <Badge className='p-2 m-1' bg="secondary">&nbsp;MySQL</Badge>
                     <Badge className='p-2 m-1' bg="secondary">&nbsp;Microsoft SQL Server</Badge>
                  </Col>
                  <Col sm={6}>
                     {/* 4 Other skill */}
                     <h4>Other skill</h4>
                     <Badge className='p-2 m-1' bg="secondary">&nbsp;axios</Badge>
                     <Badge className='p-2 m-1' bg="secondary">&nbsp;RESTful API</Badge>
                     <br />
                     <Badge className='p-2 m-1' bg="secondary"><FontAwesomeIcon icon={faGitAlt} />&nbsp;Git</Badge>
                     <Badge className='p-2 m-1' bg="secondary"><FontAwesomeIcon icon={faGithub} />&nbsp;Github</Badge>
                  </Col>
               </Row>
            </React.Fragment>
         );
      case 4:
         return (
            <React.Fragment>
               <Row>
                  {/* 5 作品集 Duckside */}
                  <h4>作品集 - Duckside 投資管理網站</h4>
                  <p>
                     <Badge className='p-2 m-1' bg="secondary"><FontAwesomeIcon icon={faNodeJs} />&nbsp;Node.js</Badge>
                     <Badge className='p-2 m-1' bg="secondary"><FontAwesomeIcon icon={faReact} />&nbsp;React</Badge>
                     <Badge className='p-2 m-1' bg="secondary">&nbsp;MySQL</Badge>
                     <Badge className='p-2 m-1' bg="secondary">&nbsp;RESTful API</Badge>
                  </p>
               </Row>
               {/* <Row>
                  <Col>
                     <button>更多</button>
                  </Col>
               </Row> */}
            </React.Fragment>
         );
      case 5:
         return (
            <React.Fragment>
               <div>
                  {/* 6 作品集 bb減塑大進擊 */}
                  <h4>作品集 - bb減塑大進擊</h4>
                  <p>
                     <a href="https://wavefunc.github.io/bb-qa-game/" target="_blank">https://wavefunc.github.io/bb-qa-game/</a>
                     <br />
                     <Badge className='p-2 m-1' bg="secondary"><FontAwesomeIcon icon={faJsSquare} />&nbsp;JavaScript</Badge>
                     <Badge className='p-2 m-1' bg="secondary"><FontAwesomeIcon icon={faCss3Alt} />&nbsp;CSS</Badge>
                  </p>
               </div>
            </React.Fragment>
         );
      case 6:
         return (
            <React.Fragment>
               {/* 7 作品集 問候圖產生器 */}
               <h4>作品集 - 問候圖產生器</h4>
               <p>
                  <a href="https://wavefunc.github.io/greetPicMaker/" target="_blank">https://wavefunc.github.io/greetPicMaker/</a>
                  <br />
                  <Badge className='p-2 m-1' bg="secondary"><FontAwesomeIcon icon={faJsSquare} />&nbsp;JavaScript</Badge>
                  <Badge className='p-2 m-1' bg="secondary"><FontAwesomeIcon icon={faBootstrap} />&nbsp;Bootstrap</Badge>
               </p>
            </React.Fragment>
         );
      case 7:
         return (
            <React.Fragment>
               <Row>
                  {/* 4 Other skill */}
                  <h4>關於本站</h4>
                  <p>介面設計概念源自於&nbsp;
                     <a href='https://store.steampowered.com/app/525480/hackGU_Last_Recode/' target="_blank">
                        .hack//G.U.
                     </a>
                  </p>
               </Row>
            </React.Fragment>
         );
      default:
         return '';
   }
}

export default Summary;