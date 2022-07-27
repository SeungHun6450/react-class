import First from './components/First'
import Intro from './components/Intro'
import Count from './components/Count'
import Clock from './components/Clock'
import Board from './components/Board'
import Timezone from './components/Timezone'

function App() {
  return (
    <div>
      {/* 기본 사용과 useState */}
      <First name="변승훈" number={27}/>
      <hr />
      <Intro name="변승훈" age={27} email="toffg6450@naver.com" introduce="React를 처음 접하는 프론트엔드 꿈나무 개발자 입니다!"/>
      <hr />
      <Count />
      <hr />
      <Clock timezone="Asia/Taipei" timezoneSeoul="Asia/Seoul" timezoneAmerica="US/Pacific"/>
      <hr />
      <Board category='영화'/>
      <hr />
      <Timezone />
    </div>
  )
}

export default App;
