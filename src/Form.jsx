import { useEffect, useRef, useState } from "react";

function Form() {
  const userRef = useRef();
  const passRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userRef.current.value);
    console.log(passRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={userRef} type="text" placeholder="Username" />
      <input ref={passRef} type="password" placeholder="Password" />
      <button type="submit">Click Me</button>
    </form>
  );
}
export default Form;
