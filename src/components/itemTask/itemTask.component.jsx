import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../../app/taskSlice";
import "../itemTask/itemTask.style.css";

const ItemTask=(task)=>
{
    const dispatch = useDispatch()
    // var txtDecoration;

    const handleOnClick=(id)=>
    {
        dispatch(deleteTask(id))
    }

    const handleOnChangeCheckBox=(id)=>
    {
        dispatch(updateTask(id))
    }
    const txtDecoration = task.task.isDone===true?"line-through":""

    return(
        <div className="task-item">
                    <input className="check-box" type="checkbox" checked={task.task.isDone} onChange={()=>handleOnChangeCheckBox(task.task.id)}/>
                    <p className="p-title" style={{textDecoration:txtDecoration}}>{task.task.title}</p>
                    <button className="btn-del" onClick={()=>handleOnClick(task.task.id)}>&#10006;</button>
        </div>
    )
}

export default ItemTask