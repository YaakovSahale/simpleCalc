const DigitButton = (num, index) => {
  return (
    <button
      key={index}
      className="btn"
      onClick={() => dispatch({ type: ACTION.ADD_DIGIT, payload: num })}
    >
      {num}
    </button>
  );
};
