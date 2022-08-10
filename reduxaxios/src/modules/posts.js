import axios from "axios";

// 액션 타입
// GET_POSTS -> 요청을 보내니까 로딩이 걸리도록
// GET_POSTS_SUCCESS -> 요청 성공했으니까 응답 데이터를 저장하도록
// GET_POSTS_ERROR -> 요청을 실패했으니 에러를 저장하도록
const GET_POSTS = "posts/GET_POSTS";
const GET_POSTS_SUCCESS = "posts/GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "posts/GET_POSTS_ERROR";

// 바로 액션 객체 넣기
export const getPosts = () => async (dispatch, getState) => {
  dispatch({ type: GET_POSTS }); // 요청이 시작됨
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    ); // API 호출
    dispatch({ type: GET_POSTS_SUCCESS, payload: { posts: response.data } }); // 성공
  } catch (e) {
    dispatch({ type: GET_POSTS_ERROR, error: e }); // 실패
  }
};

// 초기값
const initialState = {
  loading: false,
  data: null,
  error: null,
};

// 추가 / 제거
export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return {
        loading: true,
        data: null,
        error: null,
      };
    case GET_POSTS_SUCCESS:
      return {
        loading: false,
        data: action.payload.posts,
        error: null,
      };
    case GET_POSTS_ERROR:
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      return state;
  }
}
