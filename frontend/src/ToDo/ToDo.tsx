type ToDoProps = {
    id: string,
    description: string,
    status: string,
    nextStatus(id: string, status: string): void
}

export default function ToDo(props: ToDoProps) {
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
        <section>
            <p>{props.description}</p>
            <button onClick={() => {props.nextStatus(props.id, props.status)}}>{getNextStatus(props.status)}</button>
        </section>
    )
}