import React,{Component} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Title from './Title';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    addTodo(val) {
        const todo = {text: val, id: window.id++}
        this.state.data.push(todo);
        this.setState({
            data: this.state.data
        });
    }

    handleRemove(id) {
        const remainder = this.state.data.filter((todo) => {
            if(todo.id != id) return todo;
        });
        this.setState({
            data: remainder
        });
    }

    render() {
        return (
            <div>
                <Title />
                <TodoForm addTodo={this.addTodo.bind(this)} />
                <TodoList
                    todos={this.state.data}
                    remove={this.handleRemove.bind(this)}    
                 />
            </div>
        );
    }
}

window.id = 0;

export default TodoApp;
