import React, { useEffect, useState } from 'react'
import moment from 'moment-timezone'

function Clock() {
  // 흘러가는 현재 시간
  const [time, setTime] = useState(moment().format('YYYY-MM-DD HH:mm:ss'))

  useEffect(() => {
    setTimeout(() => {
      setTime(moment().format('YYYY-MM-DD HH:mm:ss'))
    }, 1000)
  }, [time])

  return (
    <>
      <p>{ time }</p>
    </>
  )
}

export default Clock