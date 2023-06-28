import { useState, useEffect } from "react";
import FilterForm from "./components/FilterForm";
import Heading from "./components/Heading";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import "./styles.css";

const filterItems = [
    {
        value: "all",
        label: "Tất cả",
        active: true
    },
    {
        value: "completed",
        label: "Đã hoàn thành",
        active: false
    },
    {
        value: "active",
        label: "Chưa hoàn thành",
        active: false
    },
];

export default function App() {
    const [filters, setFilters] = useState(filterItems);
    const [todos, setTodos] = useState([]);

    // Cập nhật lại localStorage
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem("todos"));
        if (savedTodos) {
            let filteredTodos = [];
            let selectedFilterOption = filters.filter(item => item.active);

            if(selectedFilterOption[0].value === "all"){
                filteredTodos = savedTodos;
            }else if( selectedFilterOption[0].value === "completed"){
                filteredTodos = savedTodos.filter((item) => item.completed);
            }else if( selectedFilterOption[0].value === "active"){
                filteredTodos = savedTodos.filter((item) => !item.completed);
            }

            setTodos(filteredTodos);
        }
    }, [filters]);

    // Thêm công việc (item) mới
    const onSubmit = (value) => {
        // Thêm mới 1 công việc
        if (value.trim() !== "") {
            const newIdTodo = new Date().getTime();
            const todo = {
                id: newIdTodo,
                title: value,
                completed: false,
            };

            const newTodos = [...todos, todo];
            setTodos(newTodos);
            // console.log("newTodos ", newTodos);
            updateLocalStorage(newTodos);
        }
    };

    // Thay đổi trạng thái công việc
    const statusChange = (id) => {
        let todoNew = todos.map(item => {
            if(item.id === id){
                item.completed = true;
            }
            return item;
        })

        setTodos(todoNew)
        updateLocalStorage(todoNew);
    };

    const changeStatusActiveFilter = (value) => {
        let filterNew = filters.map(item => {
            if(item.value === value){
                item.active = true;
            }else{
                item.active = false;
            }
            return item;
        })
        setFilters(filterNew);
    }

    // Xóa công việc
    const deleteItem = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
        updateLocalStorage(updatedTodos);
    };

    // Số lượng công việc/xóa tất cả
    const deleteAllItem = () => {
        const updatedTodos = [];
        setTodos(updatedTodos);
        updateLocalStorage(updatedTodos);
    };

    // saved localStorage
    const updateLocalStorage = (todos) => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    return (
        <div className="App">
            <Heading>Simple TodoApp</Heading>

            <TodoForm onSubmit={onSubmit} />

            <FilterForm items={filters} onChange={(value) => changeStatusActiveFilter(value)} />

            <TodoList statusChange={statusChange} deleteItem={deleteItem} todos={todos}/>

            <Footer deleteAll={deleteAllItem} todos={todos} />
        </div>
    );
}
