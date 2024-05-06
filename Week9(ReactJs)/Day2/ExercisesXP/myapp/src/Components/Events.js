import React, { useState } from 'react'

function Events() {
    const [isToggleOn, setIsToggleOn] = useState(true)

    const toggleFn = () => {
        setIsToggleOn((prevState) => !prevState)
    }
    // const clickMe = () => {
    //     alert('I was clicked')
    // }

    // const handleKeyDown = (e) => {
    //     if(e.key === 'Enter') {
    //         alert('You pressed Enter with the value: '+ e.target.value)
    //     }
    // }
  return (
    <div>
        {/* <input onKeyDown={handleKeyDown}/> */}
        {/* <button onClick={clickMe}>Click</button> */}
        <button onClick={toggleFn}>
            
           { isToggleOn ? 'On': 'Off'}
            
        </button>
    </div>
  )
}

export default Events