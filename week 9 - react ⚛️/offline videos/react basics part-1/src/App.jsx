import React, { useState } from "react";
import PostComponent from "./components/PostComponent";
import Navbar from "./components/Navbar";
import UseEffect from "./components/UseEffect";

function ToggleMessage() {
  const [notificationCount, setNotificationCount] = useState(0);

  function increment() {
    setNotificationCount(notificationCount + 1);
  }

  return (
    <div>
      <button onClick={increment}>Increase Notification</button>
      <p>{notificationCount}</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <UseEffect/>
    </>
  );
}

export default App;
