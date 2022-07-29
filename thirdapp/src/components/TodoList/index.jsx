import React, { useState, useEffect, useRef } from 'react'
import TodoAdd from '../TodoAdd'
import TodoItem from '../TodoItem'
import * as S from './style'

function TodoList() {
  const todoId = useRef(2)
  const [todoData, setTodoData] = useState([
    { id: 1, date: '2022-07-29', content: '강의하기', checked: false },
  ])

  const [sortedData, setSortedData] = useState([])

  useEffect(() => {
    setSortedData(todoData.sort((a, b) => a.checked - b.checked))
  }, [todoData])

  const todoRemoveHandler = (id) => {
    setTodoData(todoData.filter((itemData) => itemData.id !== id))
  }

  const todoCheckHandler = (id) => {
    setTodoData(
      todoData.map((itemData) =>
        itemData.id === id
          ? { ...itemData, checked: !itemData.checked }
          : itemData,
      ),
    )
  }

  return (
    <S.TodoContainer>
      <S.TodoTitle>나만의 TodoList</S.TodoTitle>
      <TodoAdd todoId={todoId} todoData={todoData} setTodoData={setTodoData} />
      {todoData.map((itemData) => {
        return (
          <TodoItem
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
