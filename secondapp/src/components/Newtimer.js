import React, {useEffect, useState} from 'react'

function Newtimer() {
  // 타이머 만들기
  const [seconds, setSeceonds] = useState(0)
  const [isClicked , setIsClicked ] = useState(false);
  
  const inputChange = (e) => {
    setSeceonds(e.target.value)
  }

  const startTimer = (e) => {
    if(e.key === 'Enter') {
      setIsClicked(true)
    }
  }

  useEffect(() => {
    if(isClicked) {
      const countDown = setTimeout(() => {setSeceonds(seconds-1)}, 1000)
      return () => clearTimeout(countDown)
    }
  }, [seconds, isClicked])

  return (
    <>
      <h1>{seconds}</h1>
      <input onChange={inputChange} onKeyDown={startTimer} />
      <button onClick={() => setIsClicked(true)}>타이머 설정!</button>
      <button onClick={() => setIsClicked(false)}>타이머 중지!</button>
    </>
  )
}

export default Newtimer