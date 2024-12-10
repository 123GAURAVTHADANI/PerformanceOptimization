import { useEffect, useRef, useState } from "react";
import "./App.css";
import Child from "./Child";
import useFetch from "./Hooks/useFetch";
import { ErrorBoundary } from "react-error-boundary";

function App() {
  const [count, setCount] = useState(0);
  const [childData, setChildData] = useState("");
  const inputRef = useRef(null);
  const productsData = useFetch("https://fakestoreapi.com/products");
  useEffect(() => {
    console("sasa");
  }, []);
  return (
    <>
      {/* <button onClick={handleIncrement}>Increment</button>
      <input type="text" onChange={handleInput} />
      <Child childData={childData} /> */}
      <input ref={inputRef} placeholder="Username" />
    </>
  );
}

export default App;
