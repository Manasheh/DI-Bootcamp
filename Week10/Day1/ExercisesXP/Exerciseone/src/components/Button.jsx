import React, { useContext } from 'react'
import { themeSwitcher } from '../App'

function Button() {
    const {theme, setTheme } = useContext(themeSwitcher)
    const changeTheme = () => {
        const updatedTheme = theme == 'light'? 'dark': 'light'
        setTheme(updatedTheme)
    }
  return (
    <div>
        <button onClick={changeTheme}>New Theme</button>
    </div>
  )
}

export default Button