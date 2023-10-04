import {ToDoType, ToDoTypeStrict} from "../types/toDoType.ts";
import './toDo.css';

type ToDoProps = {
    isDetail: boolean
    id: string,
    description: string,
    status: string,
    nextStatus(id: string, toDo: ToDoType): void
    handleOpenDialog(toDo: ToDoTypeStrict | null): void
}

export default function ToDo(props: ToDoProps) {
    const toDo: ToDoType = {id: props.id, description: props.description, status: props.status};
    const toDoStrict: ToDoTypeStrict = {...toDo, nextStatus: props.nextStatus}

    return (
        <section className={"ToDo-container-color-" + props.status} onClick={() => props.handleOpenDialog(toDoStrict)}>
            <p className="ToDo-color">{props.description}</p>
        </section>
    )
}