import {createSlice} from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    name:"tasks",
    initialState:[],
    reducers:
    {
        addTask:(state,action)=>
        {
            state.push(action.payload);
        },
        deleteTask:(state, action)=>
        {
            return state.filter(task=>task.id!==action.payload)
        },
        updateTask:(state, action)=>
        {
            const taskIndex = state.findIndex(task=>task.id===action.payload)
            if(taskIndex!==-1)
                state[taskIndex].isDone = !state[taskIndex].isDone;
        }
    }
})

export const {addTask, deleteTask, updateTask} = taskSlice.actions;
export default taskSlice.reducer