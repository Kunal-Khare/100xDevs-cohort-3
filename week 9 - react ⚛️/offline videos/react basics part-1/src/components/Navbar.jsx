import { useState } from 'react';

function Navbar() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  return (
    <div>
      <div style={{ display: "flex" }}>
        <span style={{ fontSize: 20, fontWeight: "bold" }}>{count}</span>
      </div>
      <img
        style={{ cursor: "pointer", width: 20, height: 20 }}
        src={"https://cdn-icons-png.flaticon.com/512/3119/3119338.png"}
      />

      <button onClick={increment}>increase count</button>
    </div>
  );
}

export default Navbar;
