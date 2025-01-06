import React from "react";
import ChildComponent from "./Child";

function ParentComponent() {
  const greet = (name) => {
    alert(`Hello, ${name}!`);

  }
  return (
    <div>
      <h1>Parent Componet is calling</h1>
      <ChildComponent name="kunal" onGreet = {greet} />
      <ChildComponent name="Dexter" onGreet = {greet} />
    </div>
  );
}

export default ParentComponent;
