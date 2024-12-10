import { useMemo, useState } from "react";

function Parent() {
  const [data, setData] = useState([
    "apple",
    "banana",
    "cherry",
    "date",
    "elderberry",
    "fig",
    "grape",
    "honeydew",
    "kiwi",
    "lemon",
    "mango",
    "nectarine",
    "orange",
    "papaya",
    "quince",
    "raspberry",
    "strawberry",
    "tangerine",
    "watermelon",
    "blueberry",
  ]);
  const [inputSearch, setSearch] = useState("");
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter((c) => c + 1);
  };
  const handleFilter = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = useMemo(() => {
    console.log("Rendering Filtered!!");
    return data.filter((item) => item.includes(inputSearch));
  }, [data, inputSearch]);

  return (
    <div>
      <button onClick={handleClick}>CLick Me</button>
      <input type="text" placeholder="Search Fruits" onChange={handleFilter} />
      {filteredData.map((item) => {
        return <h1>{item}</h1>;
      })}
    </div>
  );
}
export default Parent;
