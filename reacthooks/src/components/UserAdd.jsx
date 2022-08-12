import React from "react";

function UserAdd({ onAdd, onChange, userInput }) {
  return (
    <div>
      <input name="name" onChange={onChange}></input>
      <input name="email" onChange={onChange}></input>
      <button onClick={() => onAdd(userInput)}>추가하기</button>
    </div>
  );
}

export default React.memo(UserAdd);
