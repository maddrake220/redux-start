import { combineReducers } from "redux";
import filter from "./filter";
import todos from "./todos";
import users from "./users";
// {todos: [{text:'코딩', done: false}, {text:'점심먹기', done: false}], filter: 'ALL'}
const reducer = combineReducers({
  todos,
  filter,
  users,
});
export default reducer;
