import React from "react" 
import UserForm from "./components/UserForm"



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { message: null }
  }
  async componentDidMount() {
    const url = 'http://localhost:3001/api/hello'
    try {
      const resText = await fetch(url)
      const res = await resText.text()
      // console.log('res', res);
      this.setState({message: res})

    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <>
      <UserForm setMessage ={message => this.setState({message})} />
      <div>{this.state.message}</div>
      </>
    )
  }
}

export default App
