import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const Form = ({ inputText, setInputText, todos, setTodos, SetTodoType }) => {

    const inputTextHandler = (e) => {

        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([...todos, { text: inputText, completed: false, id: uuidv4() }]);
        setInputText("")
    };

    const filterHandler = (e) => {
        SetTodoType(e.target.value);
    };

    return (
        <form>
            <div className='input-box'>
                <input value={inputText} placeholder='Todo' onChange={inputTextHandler} type="text" className='todo-input' />
                <button onClick={submitTodoHandler} className='todo-button' type='submit'>
                    <i className='fas fa-plus-square'></i>
                </button>
            </div>
            <div className='select'>
                <select onChange={filterHandler} name="todos" className='filter-todo'>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form >
    )
}

export default Form
