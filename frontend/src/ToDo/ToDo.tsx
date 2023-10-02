import {ToDoType} from "../../types/toDoType.ts";

export default function ToDo(props: ToDoType) {

    return (
        <section>
            <p>{props.description}</p>
        </section>
    )
}