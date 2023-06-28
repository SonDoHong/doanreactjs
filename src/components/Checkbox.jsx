import "./Checkbox.css";

export default function Checkbox({ checked, statusChange }) {
    return <input onClick={statusChange} className="todo-item-checkbox" type="checkbox" defaultChecked={checked} />;
}
