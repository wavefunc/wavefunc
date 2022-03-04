import './App.scss';
import { useState } from 'react';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

function App() {
  const [state, setState] = useState('');
  var myRef = React.createRef();

  const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

  const moveButton = () => {
    myRef.current.classList.toggle('__nextPhase')
    // setState('__nextPhase');
    console.log(myRef.current.classList);
  };

  return (
    <div className="main">
      <Bounce>
        <button
          className="btn"
          onClick={moveButton}
          ref={myRef}
        >button</button>
      </Bounce>
    </div>
  );
}

export default App;
