import React from 'react';
import { Container, Badge, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJsSquare, faBootstrap, faReact, faVuejs, faNodeJs, faPhp, faGitAlt, faGithub } from '@fortawesome/free-brands-svg-icons'

function Summary({ seq = 0 }) {
   console.log(seq);
   switch (seq) {
      case 0:
         return (
            <div className='summary' >
               {/* 0 簡介 */}
               <Container className="p-3" fluid>
                  <Row>
                     <h4>李冠樺 Edward</h4>
                  </Row>
                  <Row>
                     <div>
                        擅於架構性思惟、對前端懷抱熱情<br />
                        認為最好的學習方法為分享所學<br />
                        耐心溝通、互助成長
                     </div>
                  </Row>
               </Container>
            </div>
         );
      case 1:
         return (
            <div className='summary' >
               {/* 1 經歷 */}
               <Container className="p-3" fluid>
                  <Row>
                     <h4>經歷</h4>
                  </Row>
                  <Row>
                     <div>
                        國立中正大學 資訊管理研究所 畢業<br />
                        福智佛教基金會中區事業部 資料庫管理人員 5年半<br />
                        目前於 資策會前端工程師班 學習
                     </div>
                  </Row>
               </Container>
            </div>
         );
      case 2:
         return (
            <div className='summary' >
               {/* 2 Front-End */}
               <Container className="p-3" fluid>
                  <Row>
                     <h4>Front-End</h4>
                  </Row>
                  <Row>
                     <div>
                        <Badge background-color="#fd7e14"><FontAwesomeIcon icon={faHtml5} />&nbsp;HTML</Badge>&nbsp;
                        <Badge><FontAwesomeIcon icon={faCss3Alt} />&nbsp;CSS</Badge>&nbsp;
                        <Badge><FontAwesomeIcon icon={faBootstrap} />&nbsp;Bootstrap</Badge>
                        <br />
                        <Badge bg="warning"><FontAwesomeIcon icon={faJsSquare} />&nbsp;JavaScript</Badge>&nbsp;
                        <Badge>&nbsp;jQuery</Badge>&nbsp;
                        <br />
                        <Badge><FontAwesomeIcon icon={faReact} />&nbsp;React</Badge>&nbsp;
                        <Badge><FontAwesomeIcon icon={faVuejs} />&nbsp;Vue.js</Badge>
                        <br />
                     </div>
                  </Row>
               </Container>
            </div>
         );
      case 3:
         return (
            <div className='summary' >
               {/* 3 Back-End */}
               <Container className="p-3" fluid>
                  <Row>
                     <h4>Back-End</h4>
                  </Row>
                  <Row>
                     <div>
                        <Badge>&nbsp;MySQL</Badge>&nbsp;
                        <Badge>&nbsp;Microsoft SQL Server</Badge>&nbsp;
                        <br />
                        <Badge><FontAwesomeIcon icon={faNodeJs} />&nbsp;Node.js</Badge>&nbsp;
                        <Badge><FontAwesomeIcon icon={faPhp} />&nbsp;PHP</Badge>&nbsp;
                     </div>
                  </Row>
               </Container>
            </div>
         );
      case 4:
         return (
            <div className='summary' >
               {/* 4 Other skill */}
               <Container className="p-3" fluid>
                  <Row>
                     <h4>Other skill</h4>
                  </Row>
                  <Row>
                     <div>
                        <Badge>&nbsp;axios</Badge>&nbsp;
                        <Badge>&nbsp;RESTful API</Badge>&nbsp;
                        <br />
                        <Badge><FontAwesomeIcon icon={faGitAlt} />&nbsp;Git</Badge>&nbsp;
                        <Badge><FontAwesomeIcon icon={faGithub} />&nbsp;Github</Badge>&nbsp;
                     </div>
                  </Row>
               </Container>
            </div>
         );
      case 5:
         return (
            <div className='summary' >
               {/* 5 作品集 Duckside */}
               <Container className="p-3" fluid>
                  <Row>
                     <h4>作品集 - Duckside 投資管理網站</h4>
                  </Row>
                  <Row>
                     <div>
                        duckside<br />
                     </div>
                  </Row>
               </Container>
            </div>
         );
      case 6:
         return (
            <div className='summary' >
               {/* 6 作品集 bb減塑大進擊 */}
               <Container className="p-3" fluid>
                  <Row>
                     <h4>作品集 - bb減塑大進擊</h4>
                  </Row>
                  <Row>
                     <div>
                        網址：<a href="https://wavefunc.github.io/bb-qa-game/">https://wavefunc.github.io/bb-qa-game/</a>
                     </div>
                  </Row>
               </Container>
            </div>
         );
      case 7:
         return (
            <div className='summary' >
               {/* 7 作品集 問候圖產生器 */}
               <Container className="p-3" fluid>
                  <Row>
                     <h4>作品集 - 問候圖產生器</h4>
                  </Row>
                  <Row>
                     <div>
                        網址：<a href="https://wavefunc.github.io/greetPicMaker/">https://wavefunc.github.io/greetPicMaker/</a>
                     </div>
                  </Row>
               </Container>
            </div>
         );
      default:
         return '';
   }
}

export default Summary;