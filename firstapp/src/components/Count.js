import React, { useState } from 'react'

function Count() {
  const [count, setCount] = useState(0)
  const countUp = () => {
    // setCount()안을 바꿔 주면 변수에 들어간 값이 변경 되면서 react가 해당 부분을 다시 표시해준다
    setCount(count+1)
  }
  const countDown = () => {
    setCount(count-1)
  }
  return (
    <>
      <p>숫자 값을 변경하기! : {count}</p>
      <button onClick={ countUp }>숫자 증가!</button>
      <button onClick={ countDown }>숫자 감소!</button>
    </>
  )
}

export default Count