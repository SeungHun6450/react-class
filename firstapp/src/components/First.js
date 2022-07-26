import React from 'react'

// 객체 구조 분해로 가져오기
function First({name, number}) {
  return (
    <>
      이름: {name}, 나이: {number}
    </>
  )
}

export default First