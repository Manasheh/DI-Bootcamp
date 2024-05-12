import React, { useContext, useState } from 'react'
import { DisplayContext } from './Display'

function Title() {
    const { setTitle } = useContext(DisplayContext)
  return (
        <input type="text" onChange={(e) => setTitle(e.target.value)}/>
  )
}

export default Title