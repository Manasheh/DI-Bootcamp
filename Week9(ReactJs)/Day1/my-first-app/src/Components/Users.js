import React from 'react'
// import './Users.css'
// import Button from '@mui/material/Button';
// console.log(info);
function users(props) {
    // let style = {
    //     display: 'inline-block',
    //     border: '1px solid black',
    //     margin: '20px',
    //     padding: '20px',
    //     textAlign: 'center',
    //     backgroundColor: 'lightcoral'
    // }
  return (
    <div className='tc dib pa3 ma2 bg-light-green grow'>
        <img src={`https://robohash.org/${props.id}?size=250x250`}/>    
        <p>User name is {props.info.name}</p>
        <p>User username is {props.info.username}</p>
        <p>User email is {props.info.email}</p>
        {/* <Button variant="contained">Contained</Button> */}
    </div>
  )
}

export default users