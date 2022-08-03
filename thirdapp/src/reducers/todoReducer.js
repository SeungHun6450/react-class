export function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.data]
    case 'REMOVE':
      return state.filter((element) => element.id !== action.data.id)
    case 'CHECK':
      return state.map((element) =>
        element.id === action.data.id
          ? { ...element, checked: !element.checked }
          : element,
      )
    default:
  }
}
