/* Updator function --> A function passed as an argument to setState() usually eg: setYear(arrow function)

Allow for safe updates based on the previous
Used with multiple state updates and asynchronous functions.
 */

import React, { useState } from "react";

function MyUpdate() {
  const [count, setCount] = useState();

  function increment() {
    //using the updater function
    
    /* setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1); 
    */

    // alternate way
    // we using 'c' instead of 'prevCount'

    setCount(c => c+1); 
    setCount(c=> c+1);
    setCount(c=> c+1);
  };

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default MyUpdate;
