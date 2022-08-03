import React, { useReducer, useRef } from 'react'
import TodoAddNew from '../TodoAddNew'
import TodoItemNew from '../TodoItemNew'
import * as S from './style'
import { todoReducer } from '../../reducers/todoReducer'

function TodoList() {
  const todoId = useRef(2)
  const [todoData, dispatch] = useReducer(todoReducer, [])

  const todoAddHandler = (userInput) => {
    dispatch({ type: 'ADD', data: { ...userInput, id: todoId.current } })
    todoId.current += 1
  }
  const todoRemoveHandler = (id) => {
    dispatch({ type: 'REMOVE', data: { id } })
  }
  const todoCheckHandler = (id) => {
    dispatch({ type: 'CHECK', data: { id } })
  }

  return (
    <S.TodoContainer>
      <S.TodoTitle>나만의 TodoList</S.TodoTitle>
      <TodoAddNew todoAddHandler={todoAddHandler} />
      {todoData.map((itemData) => {
        return (
          <TodoItemNew
            itemData={itemData}
            todoCheckHandler={todoCheckHandler}
            todoRemoveHandler={todoRemoveHandler}
          />
        )
      })}
    </S.TodoContainer>
  )
}

export default TodoList
