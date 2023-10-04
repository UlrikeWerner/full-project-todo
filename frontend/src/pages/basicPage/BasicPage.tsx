import NavigationBar from "../../NavigationBar/NavigationBar.tsx";
import {ToDoType, ToDoTypeStrict} from "../../types/toDoType.ts";
import ToDoList from "../../ToDo/ToDoList.tsx";

type BasicPageProps = {
    pageName: string,
    toDoList: ToDoType[],
    filterStatus: string,
    nextStatus(id: string, toDo: ToDoType): void
    handleOpenDialog(toDo: ToDoTypeStrict | null): void
}

export default function BasicPage(props: BasicPageProps) {

    return (
        <>
            <NavigationBar />
            <h1>{props.pageName}</h1>
            <section>
                <ToDoList handleOpenDialog={props.handleOpenDialog} nextStatus={props.nextStatus} list={props.toDoList.filter((entry) => entry.status === props.filterStatus)}/>
            </section>
        </>
    )
}