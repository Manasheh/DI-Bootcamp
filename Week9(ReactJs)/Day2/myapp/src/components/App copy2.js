
import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      users: []
    };
    console.log('constructor');
  }
setCount = (num) => {
  this.setState({count: this.state.count + num})
}
componentDidMount = () => {
  console.log('componentDidMount');
  this.setState({count: 15})
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => {
    this.setState({users: data})
  })
}
componentDidUpdate = (prevProps, prevState) => {
  console.log('componentDidUpdate', prevState);
}
  render() {
    console.log('render');
    return (
      <div className='App'>
        <header className='App-header'>
          <button onClick={() => this.setCount(1)}> + </button>
          {this.state.count}
          <button onClick={() => this.setCount(-1)}> - </button>
          <h2>Users</h2>
          {this.state.users.map((user) => {
            return <div>
              {user.name}
            </div>
          })}
        </header>
      </div>
    );
  }
}

export default App;