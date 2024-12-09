import { useEffect, useRef, useState } from "react";
import "./App.css";
import Child from "./Child";
import useFetch from "./Hooks/useFetch";

function App() {
  const [count, setCount] = useState(0);
  const [childData, setChildData] = useState("");
  const inputRef = useRef(null);
  const productsData = useFetch("https://fakestoreapi.com/products");

  console.log(productsData);

  // const handleIncrement = () => {
  //   setCount(count + 1);
  // };
  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  return (
    <>
      {/* <button onClick={handleIncrement}>Increment</button>
      <input type="text" onChange={handleInput} />
      <Child childData={childData} /> */}
      <h4>{inputRef.current}</h4>

      <input ref={inputRef} placeholder="Username" />
    </>
  );
}

export default App;
