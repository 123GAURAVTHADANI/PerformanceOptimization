import { useRef } from "react";
import { useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(0);
  const handleStart = () => {
    intervalRef.current = setInterval(() => {
      setCount((counter) => counter + 1);
    }, 1000);
  };

  const handleStop = () => {
    console.log(">>", intervalRef);
    clearInterval(intervalRef);
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}
export default Timer;
