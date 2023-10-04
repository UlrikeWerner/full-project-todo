export type ToDoType = {
        id: string,
        description: string,
        status: string,
        nextStatus?(id: string, toDo: ToDoType): void,
        handleOpenDialog?(toDo: ToDoTypeStrict | null): void
}

export type ToDoTypeStrict = {
        id: string,
        description: string,
        status: string,
        nextStatus(id: string, toDo: ToDoType): void,
        handleOpenDialog?(toDo: ToDoTypeStrict | null): void
}

export type PageProps = {
        toDoList: ToDoType[],
        nextStatus(id: string, toDo: ToDoType): void,
        handleOpenDialog(toDo: ToDoTypeStrict | null): void
}

export enum Status {
        OPEN,
        IN_PROGRESS,
        DONE,
        DELETE
}