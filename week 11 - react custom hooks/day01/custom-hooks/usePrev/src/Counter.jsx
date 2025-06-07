import React, { useState, useEffect } from "react";
import usePrevious from "./hooks/useprev";

const Counter = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  useEffect(() => {
    if (prevCount !== undefined && prevCount !== count) {
      console.log(`count changed from ${prevCount} tp ${count}`);
    }
  }, [count, prevCount]);

  return (
    <div>
      <p>
        {" "}
        before : {prevCount}, now :{count}{" "}
      </p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;
