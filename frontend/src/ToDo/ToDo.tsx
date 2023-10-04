import {ToDoType} from "../types/toDoType.ts";
import './toDo.css';

type ToDoProps = {
    id: string,
    description: string,
    status: string,
    nextStatus(id: string, toDo: ToDoType): void
}

export default function ToDo(props: ToDoProps) {
    const toDo: ToDoType = {id: props.id, description: props.description, status: props.status};
    function getNextStatus(propStatus: string): string{
        if(propStatus === "OPEN"){
            return "start";
        } else if(propStatus === "IN_PROGRESS"){
            return "done";
        } else {
            return "remove";
        }
    }

    return (
        <section className={"ToDo-container-color-" + props.status}>
            <p className="ToDo-color">{props.description}</p>
            <button className={props.status === "DONE" ? "ToDo-Status-Button-red" : ""} onClick={() => {props.nextStatus(props.id, toDo)}}>{getNextStatus(props.status)}</button>
        </section>
    )
}