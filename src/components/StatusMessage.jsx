const StatusMessage = ({ winner, gameBoard }) => {
  const { squares, isXnext } = gameBoard;
  const noMovesLeft = squares.every(squareValue => squareValue != null);

  const nextPlayer = isXnext ? 'X' : 'O';

  const renderStatusMessage = () => {
    if (winner)
      return (
        <div>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </div>
      );
    if (!winner && noMovesLeft) return <div>Game Draw</div>;
    if (!winner && !noMovesLeft)
      return (
        <div>
          Next Player is{' '}
          <span className={isXnext ? 'text-green' : 'text-orange'}>
            {nextPlayer}
          </span>
        </div>
      );
  };

  return <div className="status-message">{renderStatusMessage()}</div>;
};

export default StatusMessage;
