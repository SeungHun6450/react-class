import React, {useState} from 'react'

function Handlers() {
  const [number, setNumber] = useState(0)
  
  const changeHandler = (e) => {
    setNumber(e.target.value)
  }
  // onKeyDown
  // const changeHandler = (e) => {
  //  if (e.key === 'Enter') {
  //   setNumber(10)
  //  }
  // }
  
  return (
    <>
      <input onChange={changeHandler}></input>
      {/* <input onKeyDown={changeHandler}></input> */}
      <p>{number}</p>
    </>
  )
}

export default Handlers