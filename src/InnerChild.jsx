import { memo } from "react";

function InnerChild(props) {
  console.log("Inner Child Rendering!!!");
  return <h4>Inner Child</h4>;
}
export default memo(InnerChild);
