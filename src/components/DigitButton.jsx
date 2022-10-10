import React from "react";
import ACTION from "../utils/constants";

const DigitButton = ({ dispatch, digit }) => {
  return (
    <button
      className="btn"
      onClick={() => dispatch({ type: ACTION.ADD_DIGIT, payload: digit })}
    >
      {digit}
    </button>
  );
};

export default DigitButton;
