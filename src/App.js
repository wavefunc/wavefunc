import React, { useEffect, useState } from 'react';
import gsap from "gsap";
import './styles.scss'

import { dataElement, dataTransform, dataRndBlock } from './data';
import Icon from './component/Icon';
import Summary from './component/Summary';
import RndBlock from './component/RndBlock';
import Gear from './component/Gear';
import { rotateGear, displaySummary } from './handler/AnimationHandler';


function App() {
  const [icons, setIcons] = useState([]);
  const [summaries, setSummaries] = useState([]);
  const [rndBlocks, setRndBlocks] = useState([]);

  useEffect(() => {
    setIcons(gsap.utils.toArray('.icon'));
    setSummaries(gsap.utils.toArray('.summary'));
    setRndBlocks(gsap.utils.toArray('.rndBlock'));
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
            <RndBlock key={`rndBlock-${val.id}`} seq={idx} {...val} />
            <Icon key={`icon-${val.id}`} seq={idx} {...val} />
          </React.Fragment>
        ))
      }
      <Summary />
      <Gear
        dataTransform={dataTransform}
        rotateGear={rotateGear}
        displaySummary={displaySummary}
        icons={icons}
        summaries={summaries}
      />
    </React.Fragment >
  );
}

export default App;
