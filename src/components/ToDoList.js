import React from 'react'
import Todo from './Todo'

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {filteredTodos.map(todo => (
                    <Todo
                        key={todo.id}
                        todos={filteredTodos}
                        todo={todo}
                        setTodos={setTodos}
                        text={todo.text}
                        id={todo.id}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ToDoList
