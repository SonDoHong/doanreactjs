import Button from "./Button";
import Checkbox from "./Checkbox";
import "./TodoItem.css";

export default function TodoItem({ todo, onClick, statusChange }) {
    return (
        <div className="todo-item">
            <Checkbox statusChange={statusChange} checked={todo.completed} />
            {todo.title}
            <Button onClick={onClick} variant="danger">
                Delete
            </Button>
        </div>
    );
}
