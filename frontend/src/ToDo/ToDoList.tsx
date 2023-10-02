import ToDo from "./ToDo.tsx";
import {ToDoType} from "../../types/toDoType.ts";

type ToDoListProps = {
    list: ToDoType[]
}

export default function ToDoList(props: ToDoListProps) {

    return (
        <>
            {props.list.map((entry) =>
                <ToDo key={entry.id}
                      id={entry.id}
                      description={entry.description}
                      status={entry.status}
                />)}
        </>
    )
}