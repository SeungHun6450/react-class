import React, {useEffect, useState} from 'react'

function Login() {
  const [userInput, setUserInput] = useState({id: '', pw: ''})

  const onUserInputChange = (e) => {
    const {name, value} = e.target
    // 전개 연산자는 정확하게 무슨 값이 알수 있을 때만 사용하자!
    setUserInput({...userInput, [name]: value})
  }

  const doLogin = () => {
    alert('로그인 완료')
  }

  useEffect(() => {
    console.log(userInput)
  }, [userInput])

  return (
    <>
      <input placeholder='아이디를 입력해주세요' onChange={onUserInputChange} name='id' />
      <input placeholder='비밀번호를 입력해주세요' onChange={onUserInputChange} type="password" name='pw' />
      <button onClick={doLogin}>
        로그인
      </button>
    </>
  )
}

export default Login