import React from "react";
import { useReducer } from "react";
import ACTION from './utils/constants'
import "./styles/style.css";



const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION.ADD_DIGIT:
      return {
        ...state,
        currentOutput: state.currentOutput + payload,
      };

    case ACTION.CHOOSE_OPERATION:
      return {
        ...state,
        currentOutput: state.currentOutput + payload,
      };

    case ACTION.ALL_CLEAR:
      return (state = { prevOutput: "", currentOutput: "", operator: "" });

    case ACTION.DELETE_DIGIT:
      return {
        ...state,
        currentOutput: state.currentOutput + payload,
      };

    case ACTION.EVALUATE:
      return {
        ...state,
        currentOutput: state.currentOutput + payload,
      };

    default:
      console.error;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    prevOutput: "",
    currentOutput: "",
    operator: "",
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

  const outputElements = (
    <div className="output_container">
      <div className="prev_output">{state.prevOutput}</div>
      <div className="current_output">{state.currentOutput} {state.operator}</div>
    </div>
  );

  return (
    <div className="App">
      <div className="calc_container">
        {outputElements}

        <button
          className="btn spanTwo"
          onClick={() => dispatch({ type: ACTION.ALL_CLEAR })}
        >
          AC
        </button>

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
