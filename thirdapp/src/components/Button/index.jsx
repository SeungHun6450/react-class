import React, { useState } from 'react'
import * as S from './style'
// import '../styles/Button.scss'
// import style from '../styles/Button.module.css'

function Button() {
  const [isClicked, setIsClicked] = useState(false)
  // function Button({ size, color }) {
  return (
    <>
      {/* <button> */}
      {/* <button className={`${style.Button} ${style.large}`}> */}
      {/* <button className={`Button ${size} Button ${color}`}> */}
      {/* <p>Button</p>
      </button> */}
      {/* <S.Button color="red"> */}
      {/* <S.Button isClicked={false}> */}
      <S.Button isClicked={isClicked} onClick={() => setIsClicked(!isClicked)}>
        {isClicked ? <p>Button</p> : <p>Button</p>}
      </S.Button>
    </>
  )
}

export default Button
