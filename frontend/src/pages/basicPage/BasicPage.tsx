import NavigationBar from "../../NavigationBar/NavigationBar.tsx";
import {ToDoType} from "../../types/toDoType.ts";
import ToDoList from "../../ToDo/ToDoList.tsx";

type BasicPageProps = {
    pageName: string,
    toDoList: ToDoType[],
    filterStatus: string,
    nextStatus(id: string, status: string): void
}

export default function BasicPage(props: BasicPageProps) {

    return (
        <>
            <NavigationBar />
            <h1>{props.pageName}</h1>
            <section>
                <ToDoList nextStatus={props.nextStatus} list={props.toDoList.filter((entry) => entry.status === props.filterStatus)}/>
            </section>
        </>
    )
}