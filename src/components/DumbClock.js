import React, { useState, useEffect } from 'react'

// https://codesandbox.io/embed/52o442wq8l?codemirror=1
// Solution to what I'm trying to solve

const DumbClock = () => {

  const [seconds, setSeconds] = useState(0);
  const [stop, setStop] = useState(false);


  useEffect(() => {

    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 1000)

    return () => clearInterval(interval);
  }, [])


  const stopClock = () => {
    setStop(stop => !stop)
  }

  return (
    <div>
      <h3>Dumb Clock</h3>
      <div>Seconds: {seconds}</div>
      <button
        style={{ 'padding': '10px 20px', 'marginTop': '20px' }}
        onClick={stopClock}
      >
        Stop Clock
      </button>
    </div >
  )
}

export { DumbClock }