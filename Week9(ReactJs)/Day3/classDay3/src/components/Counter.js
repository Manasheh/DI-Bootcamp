import React, { useState } from 'react'

function Counter() {
    const [count , setCount ] = useState('0')
  return (
    <div>
        <button>+</button>
    </div>
  )
}

export default Counter