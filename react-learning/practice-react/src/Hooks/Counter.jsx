import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incremet = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(0);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <p className="coun-display">{count}</p>
      <button className="counter-button" onClick={decrement}>Decrement </button>
      <button className="counter-button" onClick={reset}>Reset</button>
      <button className="counter-button" onClick={incremet}>Increment</button>
    </div>
  );
}


export default Counter;