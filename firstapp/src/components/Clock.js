import React, { useState } from 'react'
import moment from 'moment-timezone'

function Clock(props) {
  const { timezone, timezoneSeoul, timezoneAmerica } = props
  const [time, setTime] = useState(moment().tz(timezone).format('YYYY-MM-DD HH:mm:ss'))
  
  const changeTZ = (TZ) => {
    setTime(moment().tz(TZ).format('YYYY-MM-DD HH:mm:ss'))
  }
  return (
    <>
      <p>{ time }</p>
      <button onClick={() => changeTZ(timezoneSeoul)}>서울로 바꾸깅</button>
      <button onClick={() => changeTZ(timezoneAmerica)}>미국으로 바꾸깅</button>
    </>
  )
}

export default Clock