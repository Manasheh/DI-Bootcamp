








import React from 'react';
import './App.css';
// import Hello from './components/Hello';
// import HelloClass from './components/HelloClass';
import User from './components/User';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }
  getUser = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      // console.log(data);
      this.setState({users: data})
    } catch (error) {
      console.log(error);
    }
  }
 
// getUser = () => {
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(res => res.json())
//   .then((data) => {
//     console.log(data);
//   })
// }
  render() {
    return (
      <div className="App" >
        <button onClick={this.getUser}>Click</button>
        {
          this.state.users.map((item) => {
            return <div>
              return <User key = {item.id} {...item}/>
            </div>
          })
        }
      </div>
    );
  }
}

export default App;