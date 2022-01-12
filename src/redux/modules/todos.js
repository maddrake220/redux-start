// docks-pattern
// action type definition
const ADD_TODO = "redux-start/todos/ADD_TODO";
const COMPLETE_TODO = "redux-start/todos/COMPLETE_TODO";

// action create function
// {type: ADD_TODO, text: '할일'}
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}
// { type: COMPLETE_TODO, index: 5 }
export function completeTodo(index) {
  return {
    type: COMPLETE_TODO,
    index,
  };
}

// initialState
const initialState = [];

// reducer
export default function reducer(previousState = initialState, action) {
  // 초기값을 설정해주는 부분
  // if (previousState === undefined) {
  //     return [];
  // }
  if (action.type === ADD_TODO) {
    return [...previousState, { text: action.text, done: false }];
  }

  if (action.type === COMPLETE_TODO) {
    return previousState.map((todo, index) => {
      if (index === action.index) {
        return { ...todo, done: true };
      }
      return todo;
    });
  }

  // previousState.push()
  // immutable 하지 않기 때문에 redux가 바뀐 것을 알 수 없음.
  return previousState;
}
