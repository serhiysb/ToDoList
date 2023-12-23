import { useSelector } from "react-redux"
import ItemTask from "../itemTask/itemTask.component";
import "../newTasks/newTasks.style.css"

const NewTasks=()=>
{
    const tasks = useSelector(state=>state)

    return(
        <div className="container">
            {tasks.map(task=>(
                task.isDone===false?<ItemTask task={task}/>:""
            ))}
        </div>
    )
}

export default NewTasks;