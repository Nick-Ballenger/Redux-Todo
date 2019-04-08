import React from 'react';
import { connect } from 'react-redux';


class Todo extends React.Component {
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addTodo(event.target.todo.value);
		event.target.todo.value = '';
	};

	handleComplete = (event, todo) => {
		event.preventDefault();
		console.log(todo);
		this.props.toggleComplete(todo);
	};

	render() {
		return (
			<div>
				<h1>Todo List</h1>
				{this.props.todos.map((todo, id) => {
					return (
						<h3 key={id} onClick={(event) => this.handleComplete(event, todo)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
						>
							{todo.todo}
						</h3>
					);
				})}
				<form onSubmit={(event) => this.handleSubmit(event)}>
					<input type="text" name="todo" placeholder="Task" />

					<button type="submit">Add Task</button>
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