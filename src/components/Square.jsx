const Square = ({ value, squareClick }) => {
  return (
    <button type="button" className="square" onClick={squareClick}>
      {value}
    </button>
  );
};
export default Square;
