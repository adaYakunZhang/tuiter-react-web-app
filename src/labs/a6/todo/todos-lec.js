import {useState} from "react";

const todosArray = [
    { id: 123, todo: 'Buy milk', complete:false },
    { id: 234, todo: 'Walk dogs', complete:false },
]

const TodoLec = () => {
    const [todos, setTodos] = useState(todosArray);
    const [title, setTitle] = useState('New Todo');

    const addTodo = () => {
        const newTodos = [
            ...todos,
            {
                id: (new Date()).getTime(),
                todo: title,
                complete: false
            }
        ];
        setTodos(newTodos);
    }
    const deleteTodo = (todo) => {
        const newTodos = todos.filter((td) => td !== todo
        )
        setTodos(newTodos);
    }
    return(
        <div>
            <h3>Todo List</h3>
            <input value={title}
                   onChange={(e) => {setTitle(e.target.value)}}
                   className="form-control"/>
            <button onClick={() => {
                addTodo();
            }} className="btn btn-primary">
                Add Todo
            </button>
            <ul className = "list-group">
                {
                    todos.map((t, ndx) =>
                        <li className="list-group-item" key={ndx}>
                            <button onClick={() => {
                                deleteTodo(t)
                            }} className="btn btn-danger">Delete</button>
                            {t.todo}
                        </li>)
                    }
            </ul>
        </div>
    );
}
export default TodoLec;