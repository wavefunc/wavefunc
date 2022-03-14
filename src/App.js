import React, { useEffect, useState } from 'react';
import gsap from "gsap";
import './styles.scss'

import { dataElement, dataTransform, dataRndBlock } from './data';
import Icon from './component/Icon';
import Summary from './component/Summary';
import RoundBLock from './component/RoundBlock';
import Gear from './component/Gear';
import { rotateGear, displaySummary } from './handler/AnimationHandler';


function App() {
  const [icons, setIcons] = useState([]);
  const [rndBlocks, setRndBlocks] = useState([]);

  useEffect(() => {
    setIcons(gsap.utils.toArray('.icon'));
    setRndBlocks(gsap.utils.toArray('.roundBLock'));
  }, [])

  useEffect(() => {

    // 設定 icon 與 roundBlock 的圖片、初始位置與大小
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
            <RoundBLock key={`rndBlock-${val.id}`} {...val} id={`rndBlock-${val.id}`} />
            <Icon key={`icon-${val.id}`} seq={idx} {...val} id={`icon-${val.id}`} />
          </React.Fragment>
        ))
      }
      <Summary />
      <Gear
        dataElement={dataElement}
        dataTransform={dataTransform}
        rotateGear={rotateGear}
        displaySummary={displaySummary}
        icons={icons}
      />
    </React.Fragment >
  );
}

export default App;
