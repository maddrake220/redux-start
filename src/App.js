import "./App.css";
import logo from "./logo.svg";
import ToDoListContainer from "./containers/TodoListContainer";
import TodoFormContainer from "./containers/TodoFormContainer";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Redux" />
        <ToDoListContainer />
        <TodoFormContainer />
      </header>
    </div>
  );
}

export default App;
