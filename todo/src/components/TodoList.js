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
                <button onClick={() => {this.addTodo() }}>Add</button>

                {/* <input
                    placeholder="More things todo..."></input>
                <button></button>
                <button onClick={() => {this.props.increment() }}>
                    +
                </button>
                <button onClick={() => {this.props.decrement() }}>
                    -
                </button>
                 {/* Uncomment these button tags if you got
                around to implementing the extra credit functions */}
                {/* <button onClick={this.incrementIfOdd}>
                    Increment if odd
                </button>
                <button onClick={this.incrementAsync}>
                    Increment async
                </button>  */}
            </div>
        );
    }
}

// The mapStateToProps function specifies which portion of the
// state tree this component needs to receive. In this case,
// since our redux store is only storing the value of the count,
// this component receives the whole state. In a more complex
// redux application, though, it would receive only the relevant
// parts it needs from the state object.
const mapStateToProps = (state) => {
    // console.log(state)
    return {
        todos: state.todos
    };
};

// The connect function is called in order to make this component aware
// of the rest of the redux architecture. Without this, this component
// is only a dumb React component. We pass in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(mapStateToProps, { addTodo })(TodoList);