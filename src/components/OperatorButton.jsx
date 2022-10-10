import React from "react";
import ACTION from "../utils/constants";

const OperatorButton = ({ dispatch, digit }) => {
  return (
    <button
      className={`btn`}
      onClick={() =>
        dispatch({ type: ACTION.CHOOSE_OPERATION, payload: digit })
      }
    >
      {digit}
    </button>
  );
};

export default OperatorButton;
