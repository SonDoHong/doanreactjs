import TodoItem from "./TodoItem";
import "./TodoList.css";

export default function TodoList({ todos = [], deleteItem, statusChange }) {
    let items;
    if (todos.length === 0) {
        items = <p className="todo-item-text">All done! :)</p>;
    } else {
        items = todos.map((todo) => <TodoItem key={todo.id} statusChange={() => statusChange(todo.id)} onClick={() => deleteItem(todo.id)} todo={todo} />);
    }

    return <div className="todo-list">{items}</div>;
}
