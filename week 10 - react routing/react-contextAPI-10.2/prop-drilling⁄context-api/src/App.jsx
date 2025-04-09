// Prop-Drilling

import React, { useState } from "react";
import ContextApi from "./ContextApi";

function App() {
  const [bulbOn, setbulbOn] = useState(false);

  return (
    <div>
      <div>
        <Light bulbOn={bulbOn} setbulbOn={setbulbOn} />
      </div>

      <div>
        <ContextApi />
      </div>
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

function LightSwitch({ setbulbOn }) {
  function toogle() {
    setbulbOn((currentState) => !currentState);
  }
  return <button onClick={toogle}>Switch</button>;
}

export default App;
