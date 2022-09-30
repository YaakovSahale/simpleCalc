import React from "react";
import { useReducer } from "react";
import { useState } from "react";
import "./styles/style.css";

const App = () => {
  const [outPutValue, setOutPutValue] = useState([]);
  const operator = "";
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

  let flagValue = true


  const calcByOperator =()=>{
    let prevValue = outPutValue
  }

  const allClearBtn = ()=>{

  }

  const deleteBtn = ()=>{

  }

  const equalBtn = () => {

  }



  const pressBtn = (num) => {
    setOutPutValue((prev) => prev + num);
  };

  return (
    <div className="container">
      <div className="calc_container">
        <div className="output">{outPutValue}</div>
        <button className="btn spanTwo">AC</button>
        <button className="btn">DEL</button>
        {btnArray.map((num, index) => {
          return (
            <button key={index} className="btn" onClick={() => pressBtn(num)}>
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
