import "./Button.css";

export default function Button({ onClick, children, variant = "default" }) {
  return (
    <button onClick={onClick} className={`button button--${variant}`}>
      {children}
    </button>
  );
}
