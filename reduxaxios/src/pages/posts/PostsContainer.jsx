import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../modules/posts";
import PostsPresenter from "./PostsPresenter";

function PostsContainer() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.posts);

  useEffect(() => {
    !data && dispatch(getPosts());
  }, [data, dispatch]);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생</div>;
  if (!data) return null;
  return <PostsPresenter posts={data} />;
}

export default PostsContainer;
