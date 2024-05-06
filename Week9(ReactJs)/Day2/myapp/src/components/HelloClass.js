import React from "react";

class HelloClass extends React.Component {
    constructor() {
        super();
        // this.name = 'John'
        this.state = {
            name: 'John'
        }
    }
    changeName =() => {
        // this.name = 'Dan';
        this.setState({name: 'Dan'})
        console.log(this.name);
    }
    render() {
        return (
            <>
                <h2>Hello {this.state.name} from {this.props.title}</h2>
                <button onClick={this.changeName}>Click me</button>
            </>
        )
    }
}

export default HelloClass;