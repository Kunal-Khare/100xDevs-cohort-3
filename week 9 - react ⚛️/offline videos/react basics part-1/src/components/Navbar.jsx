import { useState } from 'react';

function Navbar() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  setInterval(increment,1000);
  return (
    <div>
      <div style={{ display: "flex" }}>
        <span style={{ fontSize: 20, fontWeight: "bold" }}>{count}</span>
      </div>
      <img
        style={{ cursor: "pointer", width: 20, height: 20 }}
        src={"https://cdn-icons-png.flaticon.com/512/3119/3119338.png"}
      />

  
    </div>
  );
}

export default Navbar;
  