const Square = ({ value, squareClick, isWinningSquare }) => {
  const textColorClassName = value === 'X' ? 'text-green' : 'text-orange';
  const winningClassName = isWinningSquare ? 'winning' : '';

  return (
    <button
      type="button"
      className={`square ${textColorClassName} ${winningClassName}`}
      onClick={squareClick}
    >
      {value}
    </button>
  );
};
export default Square;
