import FilterItem from "./FilterItem";
import "./FilterForm.css";

export default function FilterForm({ items = [], onChange }) {
    const options = items.map((item) => <FilterItem key={item.value} {...item} checked={item.active} onClick={(e) => onChange(e.target.value)}/>);

    return (
        <form className="filter-form">
            {options}
        </form>
    );
}
