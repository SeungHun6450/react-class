import React, {useEffect, useState} from 'react'

function Timer({s}) {
  // 타이머 만들기
  const [seconds, setSeceonds] = useState(s)
  const [isClicked , setIsClicked ] = useState(false);
  
  useEffect(() => {
    if(isClicked) {
      const countDown = setTimeout(() => {setSeceonds(seconds-1)}, 1000)
      return () => clearTimeout(countDown)
    }
  }, [seconds, isClicked])

  return (
    <>
      <h1>{seconds}</h1>
      <button onClick={() => setIsClicked(true)}>타이머 시작!</button>
      <button onClick={() => setIsClicked(false)}>타이머 중지!</button>
    </>
  )
}

export default Timer