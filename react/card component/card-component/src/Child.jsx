import React from "react";

function ChildComponent({name, onGreet}) {
  return (
    <div>
      <p>
        Hello, my name is {name}
      </p>
      <button onClick={() => onGreet(name)}>Greet Me</button>
    </div>
  );
}

export default ChildComponent;
