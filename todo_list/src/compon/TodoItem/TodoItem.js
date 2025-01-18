import React, { useState } from "react";
import "./TodoItem.css";

export default function TodoItem({ task, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(task);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        onEdit(editedTask); 
        setIsEditing(false); 
    };

    const handleChange = (e) => {
        setEditedTask(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSaveClick();
        }
    };
    
    return (
        <li className="task-item">
            {isEditing ? (
                <input
                    type="text"
                    value={editedTask}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    autoFocus
                />
            ) : (
                <span>{task}</span>
            )}
            <div>
                {isEditing ? (
                    <button onClick={handleSaveClick}>Save</button>
                ) : (
                    <button onClick={handleEditClick}>Edit</button>
                )}
                <button onClick={onDelete}>Delete</button>
            </div>
        </li>
    );
}
