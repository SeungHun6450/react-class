import React, { useEffect, useState } from "react";
import axios from "axios";

function AxiosPrc() {
  // get
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchUsers();
    setIsLoading(false);
  }, []);

  if (isLoading) return <>로딩중...</>;
  return (
    <div>
      {users && users.map((user) => <p key={user.id}>{user.username}</p>)}
    </div>
  );

  // post
  //   const [posts, setPosts] = useState(null)
  //   const getPost = async () => {
  //     const response = await axios.get(
  //       'https://jsonplaceholder.typicode.com/posts',
  //      {title: 'asd', body:'asdf', userId: 1}  // 이렇게 생긴 글을 써달라
  //     )
  //     setPosts(response.data)
  //   }

  //   useEffect(() => {
  //     getPost()
  //   }, [])

  //   return (
  //     <div>
  //       {posts && posts.map((post) => (
  //         <p>{post.title}</p>
  //       ))}
  //     </div>
  //   )
}

export default AxiosPrc;
