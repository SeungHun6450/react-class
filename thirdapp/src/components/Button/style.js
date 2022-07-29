import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
    from {}
`

export const Button = styled.button`
  outline: none;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  //   background-color: ${({ color }) => color || 'blue'};
  //   background-color: ${({ isClicked }) => (isClicked ? 'gray' : 'blue')};

  ${({ theme }) => theme.common.flexCenter}

  background-color: ${({ theme }) => theme.palette.orange};

  // 예제
  background-color: ${({ isClicked }) => (isClicked ? 'gray' : 'blue')};
  border-radius: 10px;
  color: white;
  width: 100px;

  margin: 10px;

  &.hover {
    opacity: 0.5;
  }
  cursor: pointer;
  font-family: 'BlackHanSans';
`
