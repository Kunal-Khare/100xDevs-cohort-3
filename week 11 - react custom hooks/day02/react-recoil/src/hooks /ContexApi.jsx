import React, { useState } from "react";

function ContexApi() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <Increase count={count} setCount={setCount} />
      <Decrease count={count} setCount={setCount} />
    </div>
  );
}

function Increase({ count, setCount }) {
  function increase() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={increase}>Increase</button>
    </div>
  );
}

function Decrease({ count, setCount }) {
  function decrease() {
    setCount(count - 1);
  }
  return (
    <div>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default ContexApi;
