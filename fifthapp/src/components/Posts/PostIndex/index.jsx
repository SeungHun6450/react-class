import React, { useState, useEffect } from "react";
import { postData } from "../../../constants/postData";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";

function PostIndex() {
  // setSearchParams를 이용하면 link를 하지 않아도 알아서 이동한다
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState(postData);
  const location = useLocation();
  console.log(location);

  const searchInputHandler = (e) => {
    const filter = e.target.value;
    filter ? setSearchParams({ filter }) : setSearchParams({});
  };

  useEffect(() => {
    setPosts(
      postData.filter((post) => {
        const filter = searchParams.get("filter");
        const title = post.title.toLowerCase();
        return filter ? title.includes(filter) : true;
      })
    );
    console.log(location.search);
  }, [searchParams]);

  return (
    <div>
      <input onChange={searchInputHandler} />
      {posts.map((post) => (
        <NavLink
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
          to={`/posts/${post.id}`}
          state={{ post: postData.find((data) => data.id === post.id) }}
        >
          <p>{post.title}</p>
        </NavLink>
      ))}
    </div>
  );
}

export default PostIndex;
