package de.neuefische.backend.todo;

import org.springframework.stereotype.Repository;

import java.util.ArrayList;
// import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Repository
class TodoRepository {

    //private final Map<String, Todo> todos = new HashMap<>());
    private final Map<String, Todo> todos = Stream.of(new Object[][] {
            {"1", new Todo("1", "OPEN", TodoStatus.OPEN)},
            {"2", new Todo("2", "IN_PROGRESS", TodoStatus.IN_PROGRESS)},
            {"3", new Todo("3", "DONE", TodoStatus.DONE)},
    })
            .collect(Collectors.toMap(data -> (String) data[0], data -> (Todo) data[1]));

    public List<Todo> getAll() {
        return new ArrayList<>(todos.values());
    }

    public Todo save(Todo todoToSave) {
        todos.put(todoToSave.id(), todoToSave);
        return todoToSave;
    }

    public Todo getById(String id) {
        return todos.get(id);
    }

    public Todo update(Todo todo) {
        todos.put(todo.id(), todo);
        return todo;
    }

    public void delete(String id) {
        todos.remove(id);
    }
}
