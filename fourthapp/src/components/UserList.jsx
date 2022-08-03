import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

function UserList() {
  const [userInput, setUserInput] = useState({ id: "", name: "", email: "" });
  const userInputHandler = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const { state, dispatch } = useContext(UserContext);

  return (
    <div>
      {state.map((user) => {
        return (
          <>
            <p key={user.id}>{user.name}</p>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE", data: { id: user.id } })
              }
            >
              제거하기
            </button>
          </>
        );
      })}
      <input name="name" onChange={userInputHandler} />
      <input name="email" onChange={userInputHandler} />
      <button onClick={() => dispatch({ type: "ADD", data: userInput })}>
        추가하기
      </button>
    </div>
  );
}

export default UserList;
