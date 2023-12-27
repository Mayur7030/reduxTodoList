import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtask, deletetask, removetask } from "./redux/actions/action";
import "./Todo.css";

function Todo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.reducer.list);

  return (
    <div>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add items"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            ></input>
            <button
              onClick={() => {
                return dispatch(addtask(input)), setInput("");
              }}
            >
              +
            </button>
          </div>
          <div className="showitem">
            {list.map((ele) => {
              return (
                <div className="eachItem" key={ele.id}>
                  <h3>{ele.data}</h3>
                  <button
                    onClick={() => {
                      return dispatch(deletetask(ele.id));
                    }}
                  >
                    -
                  </button>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button className="btn" onClick={() => dispatch(removetask())}>
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;
