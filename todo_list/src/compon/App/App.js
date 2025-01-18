import React,{useState} from "react";
import {Form} from '../form/Form';
import TodoItem from '../TodoItem/TodoItem';

import "./App.css";

export default function App() {
   const [tasks, setTasks] = useState([]);

   function handleAddTask(task) {
      setTasks([...tasks, task]);
   }

   function handleDeleteTask(index) {
      const updatedTasks = tasks.filter((task, taskIndex) => taskIndex !== index);
      setTasks(updatedTasks);
   }

   function handleEditTask(updatedTask, index) {
      const updatedTasks = tasks.map((task, taskIndex) =>
          taskIndex === index ? updatedTask : task
      );
      setTasks(updatedTasks);
  }

   return (
      <div className="app-div">
         <h1>Todo List</h1>
         <Form onAddTask={handleAddTask} />
         {tasks.length === 0 ? (
            <p className="empty-message">The task list is empty!</p>
         ) : (
         <ul className="task-list">
            {
               tasks.map((task, index) => (
                  <TodoItem 
                     key={index} 
                     task={task} 
                     onDelete={() => handleDeleteTask(index)}
                     onEdit={(updatedTask) => handleEditTask(updatedTask, index)}
                  />
               ))}
         </ul>
         )}
      </div>
   );
}