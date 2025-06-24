import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <div className=" h-screen bg-zinc-700">
      <div className="justify-center flex">
        <h1> verify your age</h1>
      </div>
      <Button disabled={true} >Continue</Button>
    </div>

  );
}

export default App;
