import React, {useState} from  "react";
import './Form.css'
export function Form({onAddTask}){

    const [task,setTask]=useState("");

    function AddTaskInList(e){
        setTask(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        if(task.trim() !== ""){
            onAddTask(task.trim());
            setTask("");
        }
    }
    return(
        <form className="form" onSubmit={handleSubmit}>
            <input
            type="text"
            className="form-input"
            placeholder="Enter task..."
            value={task}
            onChange={AddTaskInList}
            />
            <button type="submit" className="form-button">
                Add Task
            </button>
        </form>
    )
}