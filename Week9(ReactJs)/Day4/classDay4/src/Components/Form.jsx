// import React, { useState } from 'react'

// function Form(props) {
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [num, setNum ] = useState()
//     const [yesno, setYesNo] = useState(false)
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log(name, email, num, yesno);
//         setName('')
//         setEmail('')
//     }
//   return (
//     <div>
//         <h2>Form</h2>
//         <form action="" onSubmit={handleSubmit}>
//             <input type="text"
//                 placeholder='name'
//                 onChange={(e) => setName(e.target.value)}
//                 value={name}
//                /> <br />
//             <input type="email"
//                 placeholder='email'
//                 onChange = {(e) => setEmail(e.target.value)}
//                 value={email}
//                /> <br />
//                <select onChange = {(e) => setNum(e.target.value)}>
//                     <option value="1">One</option>
//                     <option value="2">Two</option>
//                     <option value="3">Three</option>
//                </select> <br />
//                Yes/No <input onChange={(e) => setYesNo(e.target.checked)} type="checkbox" />
//             <input type="submit" value='submit'/>
//         </form>
//     </div>
//   )
// }

// export default Form





import React, { useState } from 'react'

function Form(props) {
   const [inputs, setInputs] = useState()
    const handleSubmit = (e) => {
        e.preventDefault()
       console.log(inputs);
    }

    const handleInputs = (e) => {
        // console.log('handleinputs');
        const { value, checked, type, name } = e.target;
        // console.log(value, checked, type, name);
        const inputValue = type === 'checkbox' ? checked: value;
        setInputs({...inputs, [name] : inputValue})
    }
  return (
    <div>
        <h2>Form</h2>
        <form action="" onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder='name'
                onChange={(e) => handleInputs(e)}
                name='name'
               /> 
               <br />
                <input 
                type="email"
                placeholder='email'
                name='email'
                onChange = {(e) => handleInputs(e)}
               /> 
               <br />
               <select name='num' onChange = {(e) => handleInputs(e)}>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
               </select> 
               <br />
               Yes/No
                <input
                 onChange={(e) => handleInputs(e)}
                 type="checkbox" 
                 name='yesno'
                />
                <input 
                type="submit" 
                value='submit'/>
        </form>
    </div>
  )
}

export default Form