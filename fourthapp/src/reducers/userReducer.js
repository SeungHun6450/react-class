// dispatch({ type:'ADD', data: 새로운 데이터}) -> action = 1
export function userReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.data];
    case "REMOVE":
      return state.filter((element) => element.id !== action.data.id);
    default:
      throw new Error(`${action.type}`);
  }
}
