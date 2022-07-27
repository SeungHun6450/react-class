import React, { useState } from 'react'
import moment from 'moment-timezone'

function Timezone() {
  const [times, setTimes] = useState([{id: 1, tz: 'Asia/Taipei'}, {id: 2, tz: 'Asia/Seoul'}, {id: 3, tz: 'US/Pacific'}]);

  return (
    <>
      {times.map((time) => {
        return (
          <>
            <h1>{time.id}의 현재 시각</h1>
            <h1>{moment().tz(time.tz).format('YYYY-MM-DD HH:mm:ss')}</h1>
            <button onClick={() => {setTimes(times.filter(timesElement => timesElement.id !== time.id))}}>제거하기</button>
          </>
        )
      })}
    </>
  )
}

export default Timezone