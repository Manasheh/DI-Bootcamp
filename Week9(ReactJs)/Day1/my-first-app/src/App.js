import './App.css';
import Hello from './Components/Hello';
import Users from './Components/Users'
import users from '../src/users.json'
import 'tachyons'

// console.log(users);
const students = [
  {id: 1, name: 'john'},
  {id: 2, name: 'Maria'},
  {id: 3, name: 'Jack'},
  {id: 4, name: 'Steve'}
]
function App() {
  return (
    <div className="App">
      {students.map((item, i) => {
        return <Hello name = {item.name} key = {i}/>
      })}
      {
        users.map((item, i) => {
          return <Users info = {item} key = {i}/>
        })
      }
    </div>
  );
}

export default App;
