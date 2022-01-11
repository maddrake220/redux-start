import { combineReducers } from "redux";
import filter from "./filter";
import todos from "./todos";
import users from "./users";
// {todos: [{text:'코딩', done: false}, {text:'점심먹기', done: false}], filter: 'ALL'}
export const todoApp = combineReducers({
  todos,
  filter,
  users,
});
