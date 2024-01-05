import './styles.scss';
import { useState } from 'react';
import { calculateWinner } from './winner';
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';
import History from './components/History';

function App() {
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), isXnext: false },
  ]);

  const [currentMove, setCurrentMove] = useState(0);
  const gameBoard = history[currentMove];

  const winner = calculateWinner(gameBoard.squares);

  const handleSquareClick = clickedPosition => {
    if (gameBoard.squares[clickedPosition] || winner) {
      return;
    }

    setHistory(currentHistory => {
      const isTraversing = currentMove + 1 !== currentHistory.length;

      const lastGameState = isTraversing
        ? currentHistory[currentMove]
        : history[history.length - 1];

      const nextSquaresState = lastGameState.squares.map(
        (squaresValue, position) => {
          if (position === clickedPosition)
            return lastGameState.isXnext ? 'X' : 'O';
          else return squaresValue;
        }
      );

      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGameState) + 1)
        : currentHistory;

      return base.concat({
        squares: nextSquaresState,
        isXnext: !lastGameState.isXnext,
      });
    });

    setCurrentMove(move => move + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  return (
    <div className="app">
      <StatusMessage winner={winner} gameBoard={gameBoard} />
      <Board
        squares={gameBoard.squares}
        handleSquareClick={handleSquareClick}
      />
      <h2>Game History</h2>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
