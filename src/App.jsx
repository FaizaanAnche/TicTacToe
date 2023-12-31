import './styles.scss';
import Board from './components/Board';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const onBtnCLick = () => {
    setCounter(currentCounter => {
      return ++currentCounter;
    });
  };

  return (
    <div className="app">
      <Board />
    </div>
  );
}

export default App;
