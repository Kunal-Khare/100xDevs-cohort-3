// Prop-Drilling 

import React, { useState } from "react";

function App() {
  const [bulbOn, setbulbOn] = useState(false);

  return (
    <div>
      <Light bulbOn={bulbOn} setbulbOn={setbulbOn} />
    </div>
  );
}

function Light({ bulbOn, setbulbOn }) {
  return (
    <div>
      <LightBulb bulbOn={bulbOn} />
      <LightSwitch setbulbOn={setbulbOn} />
    </div>
  );
}

function LightBulb({ bulbOn }) {
  return (
    <div>
      {bulbOn ? (
        <div>
          <h1>Light is on</h1>
        </div>
      ) : (
        <div>
          <h1>Light is off</h1>
        </div>
      )}
    </div>
  );
}

function LightSwitch({setbulbOn}) {
  function toogle() {
    setbulbOn(currentState => !currentState);
  }
  return <button onClick={toogle}>Switch</button>;
}

export default App;
