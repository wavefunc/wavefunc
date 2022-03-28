import React, { useEffect, useState } from 'react';
import gsap from "gsap";
import './scss/index.scss';
import './scss/summary.scss';
import './scss/detail.scss';
import { Container } from 'react-bootstrap';

import { dataElement, dataTransform, dataRndBlock } from './data';
import { rotateGear, displaySummary } from './handler/AnimationHandler';
import Icon from './component/Icon';
import Summary from './component/Summary';
import RndBlock from './component/RndBlock';
import Gear from './component/Gear';
import Detail from './component/Detail';
import Footer from './component/Footer';

function App() {
  const [icons, setIcons] = useState([]);
  const [summaries, setSummaries] = useState([]);
  const [rndBlocks, setRndBlocks] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    setIcons(gsap.utils.toArray('.icon'));
    setSummaries(gsap.utils.toArray('.summary'));
    setRndBlocks(gsap.utils.toArray('.rndBlock'));
    setDetails(gsap.utils.toArray('.detail'));
  }, [])

  useEffect(() => {

    // 設定 icon 與 RndBlock 的圖片、初始位置與大小
    icons.forEach((val, idx) => {
      gsap.set(val, {
        width: dataTransform[idx].width,
        top: dataTransform[idx].top,
        left: dataTransform[idx].left
      });
      gsap.set(rndBlocks[idx], {
        width: dataRndBlock[idx].width,
        height: dataRndBlock[idx].height,
        top: dataTransform[idx].top,
        left: dataTransform[idx].left
      });
    });
  }, [icons]);

  return (
    <React.Fragment>
      {
        dataElement.map((val, idx) => (
          <React.Fragment key={idx}>
            <RndBlock key={`rndBlock-${idx}`} seq={idx} />
            <Icon key={`icon-${idx}`} seq={idx} {...val} />
            <div className='summary'>
              <Container className="p-3" fluid>
                <Summary key={`smry-${idx}`} seq={idx} detail={details[idx]} />
              </Container>
            </div>
            <Detail key={`detail-${idx}`} seq={idx} detail={details[idx]} dataElement={val.src} />
          </React.Fragment>
        ))
      }
      <Gear
        dataTransform={dataTransform}
        rotateGear={rotateGear}
        displaySummary={displaySummary}
        icons={icons}
        summaries={summaries}
      />
      <Footer />
    </React.Fragment >
  );
}

export default App;
