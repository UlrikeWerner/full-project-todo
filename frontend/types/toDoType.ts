export type ToDoType = {
        id: string,
        description: string,
        status: string
}

export type PageProps = {
        toDoList: ToDoType[]
}