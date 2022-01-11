import { combineReducers } from "redux";
import filter from "./filter";
import todos from "./todos";

// {todos: [{text:'코딩', done: false}, {text:'점심먹기', done: false}], filter: 'ALL'}
export const todoApp = combineReducers({
  todos,
  filter,
});
