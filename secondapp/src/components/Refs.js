import React, {useRef} from 'react'

function Refs() {
  const inputRef = useRef()
  
  const keyHandler = (e) => {
    if(e.key === 'Enter') {
      console.log(inputRef.current.value)
    }
  }
  
  return (
    <>
      <input ref={inputRef} onKeyDown={keyHandler} /> {/* getElementById 와 같은 느낌 */}
    </>
  )
}

export default Refs