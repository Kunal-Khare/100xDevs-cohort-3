import React, { useState } from "react";

function ToggleMessage() {
  const [notificationCount, setNotificationCount] = useState(0);

  function increment() {
    setNotificationCount(notificationCount + 1);
  }

  return (
    <div>
      <button onClick={increment}>Increase Notification</button>
      {notificationCount}
    </div>
  );
}

function App() {
  return (
    <div>
      <ToggleMessage />
    </div>
  );
}

export default App;
