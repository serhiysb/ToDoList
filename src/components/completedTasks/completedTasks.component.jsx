import {useSelector} from "react-redux"
import "../completedTasks/completedTasks.style.css"
import ItemTask from "../itemTask/itemTask.component"

const CompletedTasks=()=>
{
    const tasks = useSelector(state=>state)

    return(
        <div className="container">
            {tasks.map(task=>(
                task.isDone===true?<ItemTask task={task}/>:""
            ))}
        </div>
    )
}
export default CompletedTasks;