import TotalTodo from "./TotalTodo";
import Button from "./Button";
import "./Footer.css";

export default function Footer({ todos, deleteAll }) {
  if (todos.length === 0) {
    return "";
  }
  return (
    <div className="footer">
      <TotalTodo todos={todos} />
      <Button onClick={deleteAll} variant="danger">
        Delete all
      </Button>
    </div>
  );
}
