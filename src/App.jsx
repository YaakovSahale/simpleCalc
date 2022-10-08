import React from "react";
import { useReducer } from "react";
import "./styles/style.css";

const ACTION = {
  ADD_DIGIT: `add_digit`,
  CHOOSE_OPERATION: `choose_operation`,
  ALL_CLEAR: `all_clear`,
  DELETE_DIGIT: `delete_digit`,
  EVALUATE: `evaluate`,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION.ADD_DIGIT:
      return {
        ...state,currentOutput: state.currentOutput+payload
      };

    default:
      console.error;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    prevOutput: "",
    currentOutput: "",
  });

  const btnArray = [
    "+",
    "1",
    "2",
    "3",
    "-",
    "4",
    "5",
    "6",
    "*",
    "7",
    "8",
    "9",
    "/",
    ".",
    "0",
  ];

  let flagValue = true;

  const calcByOperator = () => {
    let prevValue = outPutValue;
  };

  const allClearBtn = () => {};

  const deleteBtn = () => {};

  const equalBtn = () => {};

  const pressBtn = (num) => {
    setOutPutValue((prev) => prev + num);
  };

  return (
    <div className="container">
      <div className="calc_container">
        <div className="output_container">
          <div className="prev_output">{state.prevOutput}</div>
          <div className="current_output">{state.currentOutput}</div>
        </div>
        <button className="btn spanTwo">AC</button>
        <button className="btn">DEL</button>
        {btnArray.map((num, index) => {
          return (
            <button
              key={index}
              className="btn"
              onClick={() => dispatch({ type: ACTION.ADD_DIGIT, payload: num })}
            >
              {num}
            </button>
          );
        })}
        <button className="btn spanTwo">=</button>
      </div>
    </div>
  );
};

export default App;

{
  /* <button className="btn">DEL</button>
<button className="btn">+</button>
<button className="btn">1</button>
<button className="btn">2</button>
<button className="btn">3</button>
<button className="btn">-</button>
<button className="btn">4</button>
<button className="btn">5</button>
<button className="btn">6</button>
<button className="btn">*</button>
<button className="btn">7</button>
<button className="btn">8</button>
<button className="btn">9</button>
<button className="btn">/</button>
<button className="btn">.</button>
<button className="btn">0</button> */
}
