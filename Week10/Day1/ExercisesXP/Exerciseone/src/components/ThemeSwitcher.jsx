import React, { useContext, createContext } from 'react'
import { themeSwitcher } from '../App'
import Button from './Button'

export const newTheme = createContext()
function ThemeSwitcher() {
    const { theme } = useContext(themeSwitcher)
  return (
    <div style={{ backgroundColor: theme === 'light' ? 'white' : 'black', width: '100vw', minHeight: '100vh', overflow: 'hidden'}}>
        <newTheme.Provider>
            <h1 style={{color: 'red'}}>Theme Switcher</h1>
            <p style={{color: theme === 'light' ? 'black' : 'white'}}>The theme is now : {theme}</p>
            <Button />
        </newTheme.Provider>
    </div>
  )
}

export default ThemeSwitcher