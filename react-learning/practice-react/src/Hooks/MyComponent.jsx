/*

react hook -> special function that allows functional components to use react features without writing class components
              (useState , useEffect, useContext, useReducer, useCallback) 
              
              
useState --> a react hookthat allows the creation of a stateful variable and a setter function to update its value in the virtual DOM.   [name,setName]              
              */

/*
Why
useState is used to add state management to functional components, allowing them to maintain and update state without needing to convert to class components.

Where
useState is used inside functional components in React. It is called at the top level of the component function.

How
Import useState from React.
Call useState with an initial state value.
Destructure the returned array to get the state variable and the setter function.
*/

import React, { useState } from "react";
function MyComponent() {
  const [name, setName] = useState();

  const updateName = () => {
    setName("Dexter");
  };

  const [age, setAge] = useState(0);

  const increaseAge = () => {
    setAge(age + 1);  
  };

  return (
    <div>
      <p>Name : {name}</p>
      <button onClick={updateName}>Setname</button>

      <p>Age: {age}</p>
      <button onClick={increaseAge}>Increase Age</button>
    </div>
  );
}

export default MyComponent;
