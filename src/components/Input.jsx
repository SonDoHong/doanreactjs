import "./Input.css";

export default function Input({ value, onChange, placeholder = "" }) {
  return (
    <input
      className="todo-input"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
