import React, { useState } from "react";
import bulbOnImage from "./assets/on.png";
import bulbOffImage from "./assets/off.png";

function App() {
  return (
    <div>
      <LightBulb />
    </div>
  );
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(false);
  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <SwitchBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />
    </div>
  );
}

function BulbState({ bulbOn }) {
  return (
    <div>
      <img
        src={bulbOn ? bulbOnImage : bulbOffImage}
        alt={bulbOn ? "Bulb ON" : "Bulb OFF"}
        style={{ width: "100px", height: "auto" }}
      />
    </div>
  );
}

function SwitchBulbState({ bulbOn, setBulbOn }) {
  function toggle() {
    setBulbOn(!bulbOn);
  }
  return (
    <div>
      <button onClick={toggle}>Toggle the Bulb</button>
    </div>
  );
}

export default App;
