import React from 'react';
import { Container, Badge, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJsSquare, faBootstrap, faReact } from '@fortawesome/free-brands-svg-icons'


function Summary() {
   return (
      <React.Fragment>
         {/* 0 簡介 */}
         <div className='summary' >
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
         {/* 1 經歷 */}
         <div className='summary' >
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
         {/* 2 Front-End */}
         <div className='summary' >
            <Container className="p-3" fluid>
               <Row>
                  <h4>Front-End</h4>
               </Row>
               <Row>
                  <div>
                     <Badge background-color="#fd7e14"><FontAwesomeIcon icon={faHtml5} />&nbsp;HTML</Badge> &nbsp;

                     <Badge><FontAwesomeIcon icon={faCss3Alt} />&nbsp;CSS</Badge>&nbsp;
                     <Badge><FontAwesomeIcon icon={faBootstrap} />&nbsp;Bootstrap</Badge>
                     <br />
                     <Badge bg="warning"><FontAwesomeIcon icon={faJsSquare} />&nbsp;JavaScript</Badge>&nbsp;
                     <Badge>&nbsp;jQuery</Badge>&nbsp;
                     <Badge><FontAwesomeIcon icon={faReact} />&nbsp;React</Badge>
                     <br />
                  </div>
               </Row>
            </Container>
         </div>        
         {/* 3 Back-End */}
         <div className='summary' >
            <Container className="p-3" fluid>
               <Row>
                  <h4>smry-id02</h4>
               </Row>
               <Row>
                  <div>
                     擅於架構性思惟、對前端懷抱熱情<br />
                  </div>
               </Row>
            </Container>
         </div>        
         {/* 4 Other skill */}
         <div className='summary' >
            <Container className="p-3" fluid>
               <Row>
                  <h4>smry-id02</h4>
               </Row>
               <Row>
                  <div>
                     擅於架構性思惟、對前端懷抱熱情<br />
                  </div>
               </Row>
            </Container>
         </div>        
         {/* 5 作品集 Duckside */}
         <div className='summary' >
            <Container className="p-3" fluid>
               <Row>
                  <h4>smry-id02</h4>
               </Row>
               <Row>
                  <div>
                     擅於架構性思惟、對前端懷抱熱情<br />
                  </div>
               </Row>
            </Container>
         </div>        
         {/* 6 作品集 bb減塑大進擊 */}
         <div className='summary' >
            <Container className="p-3" fluid>
               <Row>
                  <h4>smry-id02</h4>
               </Row>
               <Row>
                  <div>
                     擅於架構性思惟、對前端懷抱熱情<br />
                  </div>
               </Row>
            </Container>
         </div>        
         {/* 7 作品集 問候圖產生器 */}
         <div className='summary' >
            <Container className="p-3" fluid>
               <Row>
                  <h4>smry-id02</h4>
               </Row>
               <Row>
                  <div>
                     擅於架構性思惟、對前端懷抱熱情<br />
                  </div>
               </Row>
            </Container>
         </div>
      </React.Fragment>
   );
}

export default Summary;