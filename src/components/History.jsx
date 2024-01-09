const History = ({ history, moveTo, currentMove }) => {
  const renderMoveButton = index => {
    // if (index > 0) {

    // }
    return (
      <button
        type="button"
        className={`btn-move ${currentMove === index ? 'active' : ''}`}
        onClick={() => moveTo(index)}
      >
        {/* {index === 0 ? 'Go to Start' : `Go to move ${index}`} */}
        Go to move {index + 1}
      </button>
    );
  };

  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, index) => (
          <li key={index}>{renderMoveButton(index)}</li>
        ))}
      </ul>
    </div>
  );
};

export default History;
