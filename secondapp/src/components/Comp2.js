import React, { Component } from 'react';

class Comp2 extends Component {
  constructor(props) {
    super(props); // 작성해줘야만 this 사용 가능
    this.countUp = this.countUp.bind(this);
	  this.state = {
	    num: 0,
      str: '안녕',
	  }
	}
  
  countUp() {
    this.setState({ // 위에 bind 해주는 과정에 없으면 undefined 가 표시되게 됨
      num: this.state.num + 1
    });
  };

  componentDidUpdate(prevProps, prevState) { // 업데이트 되기 이전의 Props, State 값을 받아옴
    // 업데이트 된 값과, 업데이트 되기 이전의 값을 직접 비교해서, 함수를 실행시킴
    // dependency 가 있던 useEffect 와는 차이가 있음에 유의!
    if (this.state.num !== prevState.num) {
      // num 이 업데이트되었을 때 실행할 코드
      this.setState({
        str: '잘가'
      })
    }
  }
  render() { // render() 를 붙여줘야만 렌더가 됨
    return (
      <div>
        <h1>{this.state.num}</h1>
        <button onClick={this.countUp}>카운트업!</button>
        <h1>{this.state.str}</h1>
      </div>
    );
  }
}

export default Comp2;