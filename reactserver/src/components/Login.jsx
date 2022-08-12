import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };
  const [cookies, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();
  const doLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8000/login",
        userInput
      );
      setCookie("accessToken", response.data["accessToken"], { path: "/" });
      navigate("/post");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (cookies["accessToken"]) {
      navigate("/post");
    }
  });
  return (
    <div>
      Login
      <input onChange={inputChangeHandler} name="email"></input>
      <input
        onChange={inputChangeHandler}
        name="password"
        type="password"
      ></input>
      <button onClick={doLogin}>로그인</button>
    </div>
  );
}

export default Login;
