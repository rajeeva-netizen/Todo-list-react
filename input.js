import React, { useState } from "react";

function Input(props) {
  const [value, setValue] = useState("");

  function HandleText(e) {
    e.preventDefault();
    // console.log(e.target.value);
    setValue(e.target.value);
  }

  function HandleClick() {
    console.log("input", value);
    props.callback(value);
  }
  return (
    <>
      <input type="text" onChange={HandleText} />
      <button onClick={HandleClick}>Add todo</button>
    </>
  );
}

export default Input;
