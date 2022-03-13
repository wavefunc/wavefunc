import React, { useEffect } from 'react';
import gsap from "gsap";
import './styles.scss'

import { dataElement, dataTransform, dataRndBlock } from './data';
import Icon from './component/Icon';
import Summary from './component/Summary';
import RoundBLock from './component/RoundBlock';
import Gear from './component/Gear';
import { rotateGear, displaySummary } from './handler/AnimationHandler';


function App() {

  useEffect(() => {

    // 設定 icon 與 roundBlock 的圖片、初始位置與大小
    dataElement.forEach((val, idx) => {
      gsap.set(`#icon-${val.id}`, {
        width: dataTransform[idx].width,
        top: dataTransform[idx].top,
        left: dataTransform[idx].left
      });
      gsap.set(`#rndBlock-${val.id}`, {
        width: dataRndBlock[idx].width,
        height: dataRndBlock[idx].height,
        top: dataTransform[idx].top,
        left: dataTransform[idx].left
      });
    });

  }, []);

  return (
    <React.Fragment>
      {
        dataElement.map((val, idx) => (
          <React.Fragment key={idx}>
            <RoundBLock key={`rndBlock-${val.id}`} {...val} id={`rndBlock-${val.id}`} />
            <Icon key={`icon-${val.id}`} {...val} id={`icon-${val.id}`} />
            <Summary key={`smry-${val.id}`} {...val} id={`smry-${val.id}`} />
          </React.Fragment>
        ))
      }
      <Gear
        dataElement={dataElement}
        dataTransform={dataTransform}
        rotateGear={rotateGear}
        displaySummary={displaySummary}
      />
    </React.Fragment >
  );
}

export default App;
