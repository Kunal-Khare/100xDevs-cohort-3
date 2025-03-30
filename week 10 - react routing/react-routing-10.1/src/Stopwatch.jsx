import React, { useState, useRef } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return <div>
    <h2>Timer: {time}</h2>
    <button onClick={startTimer}>Start</button>
    <button onClick={stopTimer}>Stop</button>
  </div>;
}

export default Stopwatch;
