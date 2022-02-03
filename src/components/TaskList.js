import React from "react";
import Task from "./Task";

function TaskList({tasks, onDelete}) {

  //console.log(tasks)

  const renderTasks = tasks.map((task)=>(
      <Task text={task.text} category={task.category} onDelete={onDelete} key={task.text}/>
  )) 
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {renderTasks}
    </div>
  );
}

export default TaskList;
