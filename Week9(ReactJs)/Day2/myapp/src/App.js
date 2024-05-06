import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [users, setUsers] = useState()

  useEffect(() => {
    console.log('useEffect');
    if(count === 0) {
      setCount(count+100)
    }
  }, [count])


  const addOne = () => {
    setCount(count + 1)
    setName('plus')
  }
  const minusOne = () => {
    setCount(count - 1)
    setName('Minus')
  }

  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      setUsers(data)
      // console.log(data);
    })
    .catch(err => console.log(err))
  }
  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={addOne}>+</button>
        <button onClick={minusOne}>-</button>
        {count}
        {name}
        <div>
          <h2>User Name:</h2>
          { users ?
            users.map((user, indx) => {
              return <div key={indx}>{user.name}</div>
            }) : null
          }
          <button onClick={() => getUsers()}>Get User</button>
        </div>
      </header>
    </div>
  );
};

export default App;