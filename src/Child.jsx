import { memo, useState } from "react";
import InnerChild from "./InnerChild";
import useFetch from "./Hooks/useFetch";

function Child(props) {
  let { childData } = props;
  console.log("Child Rendering!!");
  const [childConter, setChildCounter] = useState(0);
  const handleChildBtn = () => {
    setChildCounter(childConter + 1);
  };
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  //   const data = useFetch("https://fakestoreapi.com/products");

  return (
    <div>
      <h3>Child !!!{childData}</h3>
      <button onClick={handleChildBtn}>Child Btn </button>
      <InnerChild childConter={childConter} />
    </div>
  );
}
export default memo(Child);
