export default function TotalTodo({ todos }) {
  return (
    <div>
      You have <span>{todos.length}</span> pending task
    </div>
  );
}
