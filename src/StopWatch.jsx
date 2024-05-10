import React, { useEffect, useState } from "react";

function StopWatch() {
  const [minute, setminute] = useState(0);
  const [buttons, setbuttons] = useState(false);
  const [sec, setsec] = useState(0);
  const handleClick = () => {
    setbuttons((prev) => !prev);
  };
  const handleReset=()=>{
    setminute(0);
    setsec(0);
    setbuttons(false);
  }
  useEffect(() => {
    let intervalId;
    if (buttons === true) {
      intervalId = setInterval(() => {
        if (sec < 60) setsec((prev) => prev + 1);
        else {
          setminute((prev) => prev + 1);
          setsec(0);
        }
      }, 1000);
    } 
    return()=>clearInterval(intervalId);
  }, [buttons,sec]);
  return (
    <div>
      <h1>Stopwatch</h1>
      <p>
        Time:{minute < 10 ? "0" + minute : minute}:
        {sec < 10 ? "0" + sec : sec}
      </p>
      <div>
        <button onClick={() => handleClick()}>
          {buttons === true ? "Stop" : "Start"}
        </button>
        <button onClick={()=>handleReset()}>Reset</button>
      </div>
    </div>
  );
}

export default StopWatch;
