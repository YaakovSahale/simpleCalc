import React from "react";
import { useReducer } from "react";
import DigitButton from "./components/DigitButton";
import OperatorButton from "./components/OperatorButton";
import ACTION from "./utils/constants";
import "./styles/style.css";

const reducer = (state, { type, payload }) => {
  let firstNum = null;
  let secondNum = null;

  switch (type) {
    case ACTION.ADD_DIGIT:
      return {
        ...state,
        currentOutput: state.currentOutput + payload,
      };

    case ACTION.CHOOSE_OPERATION:
      firstNum = parseFloat(state.currentOutput);
      console.log(firstNum);
      // switch (payload) {
      //   case `+`:

      //   default:
      //     console.error
      // }      // switch (payload) {
      //   case `+`:

      //   default:
      //     console.error
      // }

      return {
        ...state,
        currentOutput: state.currentOutput + payload,
      };

    case ACTION.ALL_CLEAR:
      return (state = { prevOutput: "", currentOutput: "", operator: "" });

    case ACTION.DELETE_DIGIT:
      return {
        ...state,
        currentOutput: state.currentOutput.slice(0, -1),
      };

    case ACTION.EVALUATE:
      return {
        ...state,
        currentOutput: state.currentOutput,
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

  // const btnArray = [
  //   "+",
  //   "1",
  //   "2",
  //   "3",
  //   "-",
  //   "4",
  //   "5",
  //   "6",
  //   "*",
  //   "7",
  //   "8",
  //   "9",
  //   "/",
  //   ".",
  //   "0",
  // ];

  const outputElements = (
    <div className="output_container">
      <div className="prev_output">{state.prevOutput}</div>
      <div className="current_output">
        {state.currentOutput} {state.operator}
      </div>
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

        <button
          className="btn"
          onClick={() => dispatch({ type: ACTION.DELETE_DIGIT })}
        >
          DEL
        </button>

        <OperatorButton dispatch={dispatch} digit={`+`} />
        <DigitButton dispatch={dispatch} digit={`1`} />
        <DigitButton dispatch={dispatch} digit={`2`} />
        <DigitButton dispatch={dispatch} digit={`3`} />
        <OperatorButton dispatch={dispatch} digit={`-`} />
        <DigitButton dispatch={dispatch} digit={`4`} />
        <DigitButton dispatch={dispatch} digit={`5`} />
        <DigitButton dispatch={dispatch} digit={`6`} />
        <OperatorButton dispatch={dispatch} digit={`*`} />
        <DigitButton dispatch={dispatch} digit={`7`} />
        <DigitButton dispatch={dispatch} digit={`8`} />
        <DigitButton dispatch={dispatch} digit={`9`} />
        <OperatorButton dispatch={dispatch} digit={`%`} />
        <DigitButton dispatch={dispatch} digit={`0`} />
        <DigitButton dispatch={dispatch} digit={`.`} />

        {/* {btnArray.map((num, index) => {
          return (
            <button
              key={index}
              className="btn"
              onClick={() => dispatch({ type: ACTION.ADD_DIGIT, payload: num })}
            >
              {num}
            </button>
          );
        })} */}

        <button className="btn spanTwo">=</button>
      </div>
    </div>
  );
};

export default App;
