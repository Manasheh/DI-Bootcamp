import React, { Component} from "react";
class BuggyCounter extends Component {
  constructor() {
    super()
    this.state = {
      counter: 0
    }
  }
  handleClick = () => {
    if(this.state.counter === 5) {
      throw new Error('I crash')
    }
    this.setState({counter: this.state.counter + 1})
  }
  render() {
    return (<div>
      <button onClick={this.handleClick} style={{margin: '20px'}}>{this.state.counter}</button>
    </div>)
  }
}

export default BuggyCounter;