import NavigationBar from "../../NavigationBar/NavigationBar.tsx";
import './overview.css'
import ToDoList from "../../ToDo/ToDoList.tsx";
import {ToDoType} from "../../../types/toDoType.ts";

type OverviewProps = {
    toDoList: ToDoType[]
}

export default function Overview(props: OverviewProps) {

    return (
        <>
            <NavigationBar page="overview"/>
            <h1>Overview</h1>
            <p>Auf dieser Seite bekommst du eine Überblick über alle ToDos, die in arbeit sind oder im Backlog auf dich warten.</p>
            <div className="overview-table-grid overview-table-margin">
                <section className="overview-grid-start1 overview-grid-border">
                    <h2>Backlog</h2>
                    <ToDoList list={props.toDoList.filter((element) => element.status === "OPEN")}/>
                </section>
                <section className="overview-grid-start2 overview-grid-border">
                    <h2>Work in Progress</h2>
                    <ToDoList list={props.toDoList.filter((element) => element.status === "IN_PROGRESS")}/>
                </section>
            </div>
        </>
    )
}