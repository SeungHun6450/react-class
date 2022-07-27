import React, { Component } from 'react';

class Comp extends Component {
  constructor(props) {
    super(props)   // 이 constructor 안에서 this를 쓸 수 있도록 해주겠다.
    this.countUp = this.countUp.bind(this)  // bind를 해줘야만 해당 메소드 안에서 this를 사용할 수 있다.
    this.countDown = this.countDown.bind(this)  // bind를 해줘야만 해당 메소드 안에서 this를 사용할 수 있다.
    this.state = {
      num: 0,
      name: "변승훈"
    }
  }

  // const [num, setNum] = useState(0)
  // state = {
  //   num: 0,
  //   name: "변승훈"
  // }
  
  // 화살표 함수를 쓰지 않는 것이 전통적인 문법이다
  countUp() {
    this.setState({
      num: this.state.num + 1 // 위에 작성한 state 안의 num 값을 가지고 오게 된다.
    })
  }
  countDown() {
    this.setState({
      num: this.state.num - 1 // 위에 작성한 state 안의 num 값을 가지고 오게 된다.
    })
  }

  render() { // render() 를 붙여줘야만 렌더가 됨
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.num}</h1>
        <button onClick={this.countUp}>카운트 업!</button>
        <button onClick={this.countDown}>카운트 다운!</button>
      </div>
    );
  }
}

export default Comp;