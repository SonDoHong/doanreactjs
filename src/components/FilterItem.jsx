import "./FilterItem.css";

export default function FilterItem({ checked, label, value, onClick }) {
    return (
        <label className="filter-item-label">
            <input className="filter-item-radio" type="radio" value={value} onClick={onClick} checked={checked} readOnly />
            {label}
        </label>
    );
}
