import './styles.scss';
import Board from './components/Board';
import { useState } from 'react';
import { calculateWinner } from './winner';

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXnext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);
  const nextPlayer = isXnext ? 'X' : 'O';
  const message = winner
    ? `Winner is ${winner}`
    : `Next Player is ${nextPlayer}`;

  const handleSquareClick = clickedPosition => {
    if (squares[clickedPosition] || winner) {
      return;
    }

    setSquares(currentSquares => {
      return currentSquares.map((squaresValue, position) => {
        if (position === clickedPosition) return isXnext ? 'X' : 'O';
        else return squaresValue;
      });
    });

    setIsXNext(currentIsXNext => !currentIsXNext);
  };

  return (
    <div className="app">
      <h1>{message}</h1>
      <Board squares={squares} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
