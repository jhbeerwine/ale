/* 액션 타입 선언 */
const ADD_TODO = 'todos/ADD_TODO';
const DELETE_TODO = 'todos/DELETE_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const RESET_TODO = 'todos/RESET_TODO';

/* 액션 생성함수 선언 */
export const addTodo = (id, text, _id) => ({
  type: ADD_TODO,
  todo: {
    id: id, // 새 항목을 추가하고 nextId 값에 1을 더해줍니다.
    text,
    _id
  }
});
export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
});
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});
export const resetTodo = id => ({
  type: RESET_TODO,
  id
});

const initialState = [];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case DELETE_TODO:
      return state.filter(todo => action.id !== todo.id);
    case TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id === action.id // id 가 일치하면
            ? { ...todo, done: !todo.done } // done 값을 반전시키고
            : todo // 아니라면 그대로 둠
      );
    case RESET_TODO:
      return state = []
    default:
      return state;
  }
}
