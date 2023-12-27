import React, { useState } from "react";
import './Todo.css'

function Todo() {
  const [input, setInput] = useState("");
  const [displayvalue, setDisplayvalue] = useState([]);
  const handleChange = (e) => {
    // e.preventDefault()
    setInput(e.target.value);
    // console.log(input)
  };
  const handleClick = (e) => {
    setDisplayvalue([...displayvalue,input]);
    setInput("");
    console.log(input);
  };
  return (
    <div>
      <div className="title">Add task</div>
      <div>
        <input
          type="text"
          placeholder="enter your task"
          value={input}
          onChange={handleChange}
        ></input>
        <button className="addbutton" onClick={handleClick}>
          Add
        </button>
      </div>
      <div className="outputlist">
        {displayvalue.map((value,index) => {
          return (
            <ul>
              <li key={index}>{value}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
