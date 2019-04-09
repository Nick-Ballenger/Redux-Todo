import { ADD_TODO, TOGGLE_COMPLETE } from '../actions';

const initialState = {
	todos: [
		{
			todo: 'Clean Garage',
			id: 1,
			completed: false
		},
		{
			todo: 'Study React',
			id: 2,
			completed: false
		},
		{
			todo: 'Start Pioneer Projet',
			id: 3,
			completed: false
		}
	]
};
export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return { todos: [ ...state.todos, action.payload ] };
		case TOGGLE_COMPLETE:
			return {
				todos: state.todos.map((todo) => {
						if (todo.id !== action.payload.id) {
							return todo;
						} else {
							return action.payload;
						}
					})
				
			};
		default:return state;
	}
};