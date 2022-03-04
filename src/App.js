import './App.scss';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function App() {
  const [condition, setCondition] = useState('__origin');

  const moveButton = () => {
    setCondition('__nextPhase');
  };

  return (
    <div className="main">
      <Button variant="primary" className={`btn${condition}`} onClick={moveButton}>Button</Button>
    </div>
  );
}

export default App;
