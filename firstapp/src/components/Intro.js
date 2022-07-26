import React from 'react'
// typescript적용
import PropTypes from 'prop-types'

// props를 이용해 가져오기
function Intro(props) {
  const { name, age, email, introduce } = props
  return (
    <>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <p>이메일: {email}</p>
      <p>소개: {introduce}</p>
    </>
  )
}

// 기본 값 지정 하는 방법
Intro.defaultProps = {
  name: PropTypes.string
}

export default Intro