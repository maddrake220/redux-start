import "./App.css";
import ToDoListContainer from "./containers/TodoListContainer";
import TodoFormContainer from "./containers/TodoFormContainer";
import UserListContainer from "./containers/UserListContainer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserListContainer />
        <ToDoListContainer />
        <TodoFormContainer />
      </header>
    </div>
  );
}

export default App;
