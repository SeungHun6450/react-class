import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function Register() {
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();
  const doSignup = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/register",
        userInput
      );
      setCookie("accessToken", response.data["accessToken"], { path: "/" });
      navigate("/post");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      Register
      <input onChange={inputChangeHandler} name="email"></input>
      <input
        onChange={inputChangeHandler}
        name="password"
        type="password"
      ></input>
      <button onClick={doSignup}>회원가입</button>
    </div>
  );
}

export default Register;
