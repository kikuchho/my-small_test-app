'use client'
import React, { useState } from 'react'

const CurrentTime = () => {

    const date = new Date()

    const [ Time, setTime  ] = useState(new Date())

    function refreshClock() {
        setTime(new Date())
    }
   
    

    React.useEffect(()=>{
        
        const timerId = setInterval(refreshClock, 1000);

    }, [date])


  return (
    <div>{Time.toLocaleTimeString()}</div>
  )

  
}

export default CurrentTime