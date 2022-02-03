import React from "react";

function Task({text,category, onDelete}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={(e) => onDelete(e, {text: text, category:category})}>X</button>
    </div>
  );
}

export default Task;
