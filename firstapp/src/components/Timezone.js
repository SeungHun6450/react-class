import React, { useState } from 'react'
import moment from 'moment-timezone'

function Timezone() {
  const [timeDatas, setTimeData] = useState([{id: 1, tz: 'Asia/Taipei'}, {id: 2, tz: 'Asia/Seoul'}, {id: 3, tz: 'US/Pacific'}]);
  
  return (
    <>
      {timeDatas.map((timeData) => {
        return (
          <>
            <h1>{timeData.id}의 현재 시각</h1>
            <h1>{moment().tz(timeData.tz).format('YYYY-MM-DD HH:mm:ss')}</h1>
          </>
        )
      })}
    </>
  )
}

export default Timezone