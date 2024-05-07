import { useState, useEffect } from 'react'
// import Test from './components/Test'
import './App.css'
import Search from './components/Search'
function App() {
const [users, setUsers] = useState([])
const [search, setSearch] = useState('')
// const [show, setShow] = useState(false)
useEffect(() => {

  // if(show) {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then(data => {
  //     setUsers(data)
  //     // console.log(data);
  //   })
    

  getData()
  
}, [])
const getData = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()
    setUsers(data)
  } catch (error) {
    console.log(error);
  }
}
const filter = users.filter(item => {
  return item.name.toLowerCase().includes(search.toLocaleLowerCase())
})
  return (
    <>
     {/* <h2>useEffect</h2> */}
     {/* <button onClick={() => setShow(!show)}>show</button>
     {
      // show || <Test />
      show ? <Test />: null
     } */}


     <h2>Users:</h2>
     {/* <input placeholder='Search' onChange={(e) => setSearch(e.target.value)}/> */}
     <Search setSearch = {setSearch}/>
     {
      filter.map((item) => {
        return <div key={item.id}>{item.name}</div>
      })
     }
    </>
  )
}

export default App
