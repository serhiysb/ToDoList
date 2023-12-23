import {default as UUID} from "node-uuid";

export default class Task{
    constructor(title="")
    {
        this.id=UUID.v4();
        this.title = title;
        this.isDone = false;
    }
}