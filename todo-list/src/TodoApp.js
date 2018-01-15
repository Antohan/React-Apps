import React,{Component} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Title from './Title';
import axios from 'axios';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.apiUrl = 'https://5a5cb5aad6221a0012962cf8.mockapi.io/todos';
    }

    componentDidMount() {
        axios.get(this.apiUrl)
            .then((res) => {
                this.setState({data: res.data});
            })
            .catch((res) => {
                errors: res.statusText
            })
    }

    addTodo(val) {
        /*const todo = {text: val, id: window.id++}
        this.state.data.push(todo);
        this.setState({
            data: this.state.data
        });*/
        const todo = {text: val}

        axios.post(this.apiUrl, todo)
            .then((res) => {
                this.state.data.push(res.data);
                this.setState({data: this.state.data});
            });
    }

    handleRemove(id) {
        const remainder = this.state.data.filter((todo) => {
            if(todo.id != id) return todo;
        });
        /*
        this.setState({
            data: remainder
        });
        */
        axios.delete(this.apiUrl + '/' + id)
            .then((res) => {
                this.setState({data: remainder});
            });
    }

    render() {
        return (
            <div>
                <Title todoCount={this.state.data.length} />
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
