import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function UserList({ users, getUsers }) {
  const navigate = useNavigate();
  useEffect(() => {
    getUsers();
    return () => {};
  }, [getUsers]);
  if (users.length === 0) {
    return <p>현재 유저 정보 없음</p>;
  }
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.login}</li>
      ))}
      <button onClick={click}>Go Home</button>
    </ul>
  );
  function click() {
    navigate("/");
  }
}
