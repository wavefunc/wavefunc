import './App.scss';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [state, setState] = useState('__origin');

  const moveButton = () => {
    setState('__nextPhase');
  };

  return (
    <div className="main">
      <Button variant="primary" className={`btn${state}`} onClick={moveButton}>Button</Button>
    </div>
  );
}

export default App;
