import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import UserList from "../components/UserList";
import { getUsersSagaStart, getUsersThunk } from "../redux/modules/users";

export default function UserListContainer() {
  const users = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  const getUsers = useCallback(() => {
    dispatch(getUsersSagaStart());
  }, [dispatch]);
  return <UserList users={users} getUsers={getUsers} />;
}
