import React from "react";

function UserItem({ user, onDelete }) {
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <button onClick={() => onDelete(user.id)}>제거하기</button>
    </div>
  );
}

export default React.memo(UserItem);
