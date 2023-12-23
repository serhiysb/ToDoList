import { useState } from "react";
import { useDispatch } from "react-redux";
import Task from "../../app/task";
import { addTask } from "../../app/taskSlice";
import "../addTask/addTask.style.css"

const AddToDo=()=>
{
    const [value,setValue]= useState(new Task());
    const dispatch = useDispatch();

    const onSubmit=(e)=>
    {
        e.preventDefault();
        if(value.title.trim().length===0)
        {
            alert("Enter a task before adding!");
            return;
        }
        dispatch(addTask(value));
        setValue(new Task())
    }

    return(
        <div className="input-container">
            <input type="text" className="input-text" placeholder="Add a todo..." onChange={(e)=>setValue({...value,title:e.target.value})} value={value.title}/>
            <button onClick={onSubmit} className="add-btn">+</button>
        </div>
    )
}

export default AddToDo