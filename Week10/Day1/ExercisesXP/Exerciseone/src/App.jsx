import React, { createContext, useState } from 'react';
import ThemeSwitcher from './components/ThemeSwitcher';

export const themeSwitcher = createContext()
function App() {
  const [theme, setTheme] = useState('light')
  return (
    <themeSwitcher.Provider value={{theme, setTheme}}>
      <ThemeSwitcher />
    </themeSwitcher.Provider>
  )
}

export default App