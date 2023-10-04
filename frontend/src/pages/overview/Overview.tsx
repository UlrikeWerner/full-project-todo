import NavigationBar from "../../NavigationBar/NavigationBar.tsx";
import './overview.css'
import ToDoList from "../../ToDo/ToDoList.tsx";
import {PageProps} from "../../types/toDoType.ts";

export default function Overview(props: PageProps) {

    return (
        <>
            <NavigationBar />
            <h1>Overview</h1>
            <p>Auf dieser Seite bekommst du eine Überblick über alle ToDos, die in arbeit sind oder im Backlog auf dich warten.</p>
            <div className="overview-table-grid overview-table-margin">
                <section className="overview-grid-start1 overview-grid-border">
                    <h2>Backlog</h2>
                    <ToDoList handleOpenDialog={props.handleOpenDialog} nextStatus={props.nextStatus} list={props.toDoList.filter((element) => element.status === "OPEN")}/>
                </section>
                <section className="overview-grid-start2 overview-grid-border">
                    <h2>Work in Progress</h2>
                    <ToDoList handleOpenDialog={props.handleOpenDialog} nextStatus={props.nextStatus} list={props.toDoList.filter((element) => element.status === "IN_PROGRESS")}/>
                </section>
            </div>
        </>
    )
}