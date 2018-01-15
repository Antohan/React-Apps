import React from 'react';

const Todo = ({todo, remove}) => {
    return (<a href="#" className="list-group-item" onClick={() => {remove(todo.id)}}>{todo.text}</a>);
}

const TodoList = ({todos, remove}) => {
    const todoNode = todos.map((todo) => {
        return (<Todo todo={todo} key={todo.id} remove={remove} />)
    });
    return (<div className="list-group" style={{marginTop:'30px'}}>{todoNode}</div>);
}

export default TodoList;