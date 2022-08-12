import UserList from "./components/UserList";
import UserAdd from "./components/UserAdd";
import { useMemo, useRef, useState, useCallback } from "react";
import { userData } from "./constants/userData";

function App() {
  const [userInput, setUserInput] = useState({ name: "", email: "" });
  const [users, setUsers] = useState(userData);
  const nextId = useRef(11);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setUserInput((prevState) => ({ ...prevState, [name]: value }));
  }, []);
  const onAdd = useCallback((userInfo) => {
    setUsers((prevState) => [
      ...prevState,
      { ...userInfo, id: nextId.current++ },
    ]);
  }, []);
  const onDelete = useCallback((userId) => {
    setUsers((prevState) => prevState.filter((user) => user.id !== userId));
  }, []);

  // const countUsers = (users) => {
  //   console.log("왜그래..?");
  //   return users.length;
  // };
  // const count = useMemo(() => countUsers(users), [users]);

  return (
    <div>
      <UserList users={users} onDelete={onDelete} />
      <UserAdd onAdd={onAdd} onChange={onChange} userInput={userInput} />
      {/* <p>유저 수: {count}</p> */}
    </div>
  );
}

export default App;
