import React from "react";
import { useState } from "react";
import "./styles/style.css";

const App = () => {
  const add = (num) => {
    x = 1;
  };

  const subtract = () => {
    x = 1;
  };

  const multiply = () => {
    x = 1;
  };

  const divide = () => {
    x = 1;
  };

  const pressBtn = (num) => {};

  return (
    <div className="container">
      <div className="calc_container">
        <div className="output">536969545</div>
        <button className="btn spanTwo">AC</button>
        <button className="btn">DEL</button>
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
        <button className="btn">0</button>
        <button className="btn spanTwo">=</button>
      </div>
    </div>
  );
};

export default App;
