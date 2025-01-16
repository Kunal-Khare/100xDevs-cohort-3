// the updater function can be used to toggle b/w true and false

import React, { useState } from "react";

function Toggle() {
  const [ison, setIson] = useState(false);

  function handleToggle() {
    setIson((prevIson) => !prevIson);
  }

  return (
    <div>
      <p>Toggle is: {ison ? "ON" : "OFF"}</p>
      <button onClick={handleToggle}>Switch</button>
    </div>
  );
}

export default Toggle;
