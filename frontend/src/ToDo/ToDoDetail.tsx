import {ToDoType} from "../types/toDoType.ts";
import './toDo.css';

type ToDoDetailProps = {
    id: string,
    description: string,
    status: string,
    nextStatus(id: string, toDo: ToDoType): void,
    closeDialog(): void,
    deleteToDo(id: string): void
}

export default function ToDoDetail(props: ToDoDetailProps) {
    const toDo: ToDoType = {id: props.id, description: props.description, status: props.status};
    function getNextStatus(propStatus: string): string{
        if(propStatus === "OPEN"){
            return "start";
        } else {
            return "done";
        }
    }

    function deleteToDo(id: string): void{
        props.deleteToDo(id);
        props.closeDialog();
    }

    return (
        <section className={"ToDo-container-color-" + props.status}>
            <p>description</p>
            <p className="ToDo-color">{props.description}</p>
            <p>status</p>
            <p className="ToDo-color">{props.status}</p>
            {props.status !== "DONE" &&
                <button onClick={() => {props.nextStatus(props.id, toDo)}}>{getNextStatus(props.status)}</button>}
            <button className="ToDo-Status-Button-red" onClick={() => deleteToDo(props.id)}>delete</button>
        </section>
    )
}