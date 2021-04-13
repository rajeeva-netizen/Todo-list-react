import "./styles.css";
import Input from "./input";
import Todo from "./todo";
import { useState } from "react";
export default function App(props) {
  const [todo, setTodo] = useState([]);

  function getList(params) {
    console.log("app", params);
    setTodo([...todo, params]);
    console.log("array :", todo);
  }

  return (
    <div className="App">
      <Input callback={getList} />
      <Todo value={todo} />
    </div>
  );
}
