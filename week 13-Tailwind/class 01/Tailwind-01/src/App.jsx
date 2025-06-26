import React from "react";
import Button from "./components/Button";
import { Input } from "./components/Input";
import OTPInput from "./components/Otp";


function App() {
  return (
    <div className=" h-screen bg-zinc-700">
      <div className="justify-center flex">
        <h1 className="text-white"> verify your age</h1>
      </div>
      <Button disabled={false} >Continue</Button>
      <Input type="text" placeholder="Enter your age" />

      <OTPInput />
    </div>

  );
}

export default App;
