/*
The Context API is a powerful feature in React that enables you to manage state across your application more effectively, especially when dealing with deeply nested components. It provides a way to share values (state, functions, etc.) between components without having to pass props down manually at every level.

*/

import React, { createContext, useContext, useState } from "react";

const BulbContext = createContext();

function ContextApi() {
  const [bulbOn, setBulbOn] = useState(false);
  return (
    <div>
      <BulbContext.Provider value={{ bulbOn, setBulbOn }}>
        <Light />
      </BulbContext.Provider>
    </div>
  );
}

function Light() {
  return (
    <div>
      <LightBulb />
      <LightSwitch />
    </div>
  );
}

function LightBulb() {
  const { bulbOn } = useContext(BulbContext);
  return <div>{bulbOn ? "Bulb is on" : "Bulb is off"}</div>;
}

function LightSwitch() {
  const { setBulbOn } = useContext(BulbContext);
  
  function toggle() {
    setBulbOn((currentState) => !currentState);
  }
  
  return (
    <div>
      <button onClick={toggle}>Toggle the bulb</button>
    </div>
  );
}

export default ContextApi;
