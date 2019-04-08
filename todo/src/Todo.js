import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleComplete } from './actions';

class Todo extends React.Component {
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addTodo(e.target.todo.value);
		e.target.todo.value = '';
	};

	handleComplete = (e, todo) => {
		e.preventDefault();
		console.log(todo);
		this.props.toggleComplete(todo);
	};

	render() {
		return (
			<div>
				<h1 className="TodoHeaderText">Todo List</h1>
				{this.props.todos.map((todo, id) => {
					return (
						<li className="TodoItem" key={id} onClick={(event) => this.handleComplete(event, todo)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
						>
							{todo.todo}
						</li>
					);
				})}
				<form className="TodoForm" onSubmit={(event) => this.handleSubmit(event)}>
					<input className="TodoInput" type="text" name="todo" placeholder="Task" />

					<button className="TodoButton" type="submit">Add Task</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	};
};

export default connect(mapStateToProps, {
	addTodo,
	toggleComplete
})(Todo);