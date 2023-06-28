import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import "./TodoForm.css";

export default function TodoForm({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(input);
    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <Input
        placeholder="Bạn muốn làm gì?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <Button variant="primary">Thêm</Button>
    </form>
  );
}
