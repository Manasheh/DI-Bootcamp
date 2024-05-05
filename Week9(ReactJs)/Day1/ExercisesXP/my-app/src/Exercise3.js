import React, { Component } from "react";
import logo from './logo.svg';
import './Exercise.css'
class Exercise extends Component {
   
    render() {
        const style_header = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial"
          };
        return (
            <div>
                <h1 style={{color:style_header.color, backgroundColor: style_header.backgroundColor}}>This is a Header</h1>
                <p className="para">This is a paragraph</p>
                <a href="#">This is a link</a>
                <form>
                    <h2>This is a form:</h2>
                    <label>Enter your name:</label> <br/>
                    <div>
                    <input type="text"/>
                    <button>Submit</button>
                    <h3>Here is an image</h3>
                    <img src={logo} style={{width:'700px', height: '700px', padding: '0', margin: 0}}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default Exercise