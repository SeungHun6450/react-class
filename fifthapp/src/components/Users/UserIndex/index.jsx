import React from "react";
import { userData } from "../../../constants/userData";
import { Link } from "react-router-dom";

function UserIndex() {
  return (
    <div>
      {userData.map((user) => (
        <Link to={`/users/${user.id}`}>
          <p>{user.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default UserIndex;
