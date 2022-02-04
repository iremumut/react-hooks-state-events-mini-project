import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { useState } from "react/cjs/react.development";


function App() {

  const [allTasks, setAllTasks] = useState(TASKS);
  const [filter, setFilter] = useState('All');

  const displayTasks = allTasks.filter((task) => {
      if(filter === 'All'){
        return true;
      }
      return task.category === filter;
  })

  function filterTasks(cat){
      setFilter(cat);
  }

  function onTaskFormSubmit(newTask){
      const newTasks = [...allTasks,newTask];
      setAllTasks(newTasks);
  }

  function deleteTask(e, task) {
      const newtasks = allTasks.filter((taks) => {
        return taks.text !== task.text;
      })
      setAllTasks(newtasks);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} filterTasks={filterTasks} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={displayTasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
