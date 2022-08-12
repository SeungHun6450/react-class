import React, { useState } from "react";
import UserItem from "./UserItem";
import { userData } from "../constants/userData";

function UserList({ users, onDelete }) {
  return (
    <div>
      {users.map((user) => (
        <UserItem user={user} onDelete={onDelete}></UserItem>
      ))}
    </div>
  );
}

export default React.memo(UserList);
