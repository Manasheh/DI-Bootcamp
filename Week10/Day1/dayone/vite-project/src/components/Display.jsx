import { useState, createContext } from 'react'
import ShowCounter from './ShowCounter'
import  Title  from './Title'

export const DisplayContext = createContext()

function Display() {
  const [title, setTitle] = useState('mytitle')

  return (
    <div>
        <DisplayContext.Provider value = {{title, setTitle}}>
          <ShowCounter />
          <div>
          <Title />
          </div>
        </DisplayContext.Provider>
    </div>
  )
}

export default Display