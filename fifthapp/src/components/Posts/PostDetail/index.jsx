import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function PostDetail() {
  const location = useLocation();
  {
    /* link태그와 역할은 유사하나 navigate는 함수 안에서 쓸 수 있다. */
  }
  const navigate = useNavigate();
  const { post } = location.state ? location.state : { post: "" };

  if (!post) return <p>Not Found</p>;
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <button onClick={() => navigate("/users", { state: { data: 1 } })}>
        유저로 가기
      </button>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
}

export default PostDetail;
