import React, { useEffect, useState } from "react";

function StopWatch2() {
  const [timer, settimer] = useState(false);
  const [time, settime] = useState(0);
  const handleReset = () => {
    settimer(false);
    settime(0);
  };
  const handleClick = () => {
    settimer((prev) => !prev);
  };
  useEffect(() => {
    let intervalId;
    if (timer === true) {
      intervalId = setInterval(() => {
        settime((prev) => prev + 1);
      },1000);
    }
   
    return () => {
      clearInterval(intervalId);
    };
  }, [timer]);
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);

    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  return (
    <div>
      <h2>Stopwatch</h2>
      <p>Timer:{formatTime(time)}</p>
      <button onClick={() => handleClick()}>{timer ? "Stop" : "Start"}</button>
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
}

export default StopWatch2;
