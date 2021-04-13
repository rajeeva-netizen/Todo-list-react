import "antd/dist/antd.css";
import { List } from "antd";

function Todo({ value }) {
  console.log("todo", value);
  return (
    <>
      <h1>List</h1>
      {value.map((x, index) => (
        <>
          <li key={index}>{x}</li>
        </>
      ))}
    </>
  );
}

export default Todo;
