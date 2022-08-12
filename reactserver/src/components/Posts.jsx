import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

function Posts() {
  const [userInput, setUserInput] = useState({ title: "", body: "" });
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };
  const [cookies, setCookie, removeCookie] = useCookies();
  const [data, setData] = useState(null);
  const getData = async () => {
    const response = await axios.get("http://localhost:8000/posts", {
      headers: {
        Authorization: `Bearer ${cookies["accessToken"]}`,
      },
    });
    setData(response.data);
  };
  const postData = async () => {
    const response = await axios.post(
      "http://localhost:8000/posts",
      userInput,
      {
        headers: {
          Authorization: `Bearer ${cookies["accessToken"]}`,
        },
      }
    );
    getData();
  };
  const deleteData = async (id) => {
    const response = await axios.delete(`http://localhost:8000/posts/${id}`, {
      headers: {
        Authorization: `Bearer ${cookies["accessToken"]}`,
      },
    });
    getData();
  };
  const putData = async (id) => {
    const response = await axios.put(
      `http://localhost:8000/posts/${id}`,
      userInput,
      {
        headers: {
          Authorization: `Bearer ${cookies["accessToken"]}`,
        },
      }
    );
    getData();
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      Posts
      {data &&
        data.map((post, index) => (
          <p key={post.id}>
            {index}. {post.body}
            <button onClick={() => deleteData(post.id)}>삭제하기</button>
            <button onClick={() => putData(post.id)}>수정하기</button>
          </p>
        ))}
      <input onChange={inputChangeHandler} name="title" />
      <input onChange={inputChangeHandler} name="body" />
      <button onClick={postData}>글쓰기</button>
    </div>
  );
}

export default Posts;
