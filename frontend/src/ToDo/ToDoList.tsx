import ToDo from "./ToDo.tsx";
import {ToDoType, ToDoTypeStrict} from "../types/toDoType.ts";

type ToDoListProps = {
    list: ToDoType[],
    nextStatus(id: string, todo: ToDoType): void,
    handleOpenDialog(toDo: ToDoTypeStrict | null): void
}

export default function ToDoList(props: ToDoListProps) {

    return (
        <>
            {props.list.map((entry) =>
                <ToDo key={entry.id}
                      isDetail={false}
                      id={entry.id}
                      description={entry.description}
                      status={entry.status}
                      nextStatus={props.nextStatus}
                      handleOpenDialog={props.handleOpenDialog}
                />)}
        </>
    )
}