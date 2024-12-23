import React from "react";
import Card from "./Card.jsx";
import Greeting from "./greeting.jsx";
import ParentComponent from "./parent.jsx";

function App() {
  return (
    <>
      <Card />
     <ParentComponent/>
    </>
  );
}

export default App;
