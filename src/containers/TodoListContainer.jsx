import { useSelector } from "react-redux";
import ToDoList from "../components/TodoList";

// todolistcontainer의 하는 일은
// store를 연결 한 후 store의 state를 꺼내서
// 필요한 것을 props를 넣어주는 일
// --> useSelector 사용
function TodoListContainer() {
  const todos = useSelector((state) => state.todos);
  return <ToDoList todos={todos} />;
}
export default TodoListContainer;
