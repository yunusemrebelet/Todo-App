import React, { useState, useEffect } from 'react'
import './style/App.css'
import Header from './components/Header'
import Form from './components/Form'
import ToDoList from './components/ToDoList'

const App = () => {

    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [todoType, SetTodoType] = useState("all");
    const [filteredTodos, SetFilteredTodos] = useState([]);

    useEffect(() => {
        getLocalStoreValue();
    }, [])

    useEffect(() => {
        filteredHandler();
        saveToLocal();
    }, [todos, todoType]);

    const filteredHandler = () => {
        switch (todoType) {
            case 'completed':
                SetFilteredTodos(todos.filter(todo => todo.completed === true));
                break;
            case 'uncompleted':
                SetFilteredTodos(todos.filter(todo => todo.completed === false));
                break;
            default:
                SetFilteredTodos(todos);
                break;
        }
    };

    // save items to localstorage
    const saveToLocal = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const getLocalStoreValue = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let localTodo = JSON.parse(localStorage.getItem("todos"))
            setTodos(localTodo);
        }
    };

    return (
        <div className='App'>
            <Header />
            <Form
                todos={todos}
                setTodos={setTodos}
                inputText={inputText}
                setInputText={setInputText}
                SetTodoType={SetTodoType}
            />
            <ToDoList
                setTodos={setTodos}
                todos={todos}
                filteredTodos={filteredTodos}
            />
        </div>
    )
}

export default App
