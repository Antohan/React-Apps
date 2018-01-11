import React from 'react';

const Todo = ({todo, remove}) => {
    return (<li onClick={() => {remove(todo.id)}}>{todo.text}</li>);
}

const TodoList = ({todos, remove}) => {
    const todoNode = todos.map((todo) => {
        return (<Todo todo={todo} key={todo.id} remove={remove} />)
    });
    return (<ul>{todoNode}</ul>);
}

export default TodoList;