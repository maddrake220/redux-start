import { useRef } from "react";

// presentational component or component
export default function ToDoForm({ add }) {
  const inputRef = useRef();
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={click}>추가</button>
    </div>
  );
  function click() {
    add(inputRef.current.value);
  }
}
