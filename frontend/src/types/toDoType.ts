export type ToDoType = {
        id: string,
        description: string,
        status: string,
        nextStatus(id: string, status: string): void
}

export type PageProps = {
        toDoList: ToDoType[],
        nextStatus(id: string, status: string): void
}

export enum Status {
        OPEN,
        IN_PROGRESS,
        DONE,
        DELETE
}