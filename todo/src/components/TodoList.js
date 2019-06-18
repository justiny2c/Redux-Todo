import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoList extends Component {
    // incrementIfOdd = () => {
    //     // Stretch Problem: Implement an increment function that
    //     // only increments if the counter value is odd
    //     if(this.props.count % 2 === 1){
    //         this.props.increment()
    //     }
    // };
    state = {
        newTodo: '',
    }

    handleChange = e => {
        this.setState({newTodo: e.target.value})
    }

    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: ''})
    }
    render() {
        return (
            <div>
                {this.props.todos.map( todo => {
                    return (
                        // <p>{todo.value}</p>
                        <p>{todo.value}</p>
                )})}
                <input
                    type="text"
                    value={this.state.newTodo}
                    placeholder="More things todo..."
                    onChange={this.handleChange}/>
                <button onClick={this.addTodo}>Add</button>

            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, { addTodo })(TodoList);