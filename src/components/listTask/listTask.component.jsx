import { useSelector, useDispatch } from "react-redux"
import "../listTask/listTask.style.css"
import ItemTask from "../itemTask/itemTask.component";

const TaskList=()=>
{
    const tasks = useSelector((state)=>state)
    
    return(
        <div className="container">
            {tasks.map((task)=>(
                <ItemTask task={task}/>
            ))}
        </div>
    )
}

export default TaskList;