import React, { useState } from 'react';

function UserForm({ onSubmit }) {
    const [userForm, setUserForm] = useState({
        fname: '',
        lname: '',
        age: '',
        gender: '',
        destination: '',
        dietaryRestrictions: [] // Add dietaryRestrictions field to state
    });

    const submitHandler = (e) => {
        e.preventDefault();
        onSubmit(userForm); // Pass form data to parent component
    };

    const changeHandler = (e) => {
        const { name, value, type, checked } = e.target;

      
        if (type === 'checkbox') {
            setUserForm(prevForm => {
                if (checked) {
                    return { ...prevForm, [name]: [...prevForm[name], value] };
                } else {
                    return { ...prevForm, [name]: prevForm[name].filter(item => item !== value) };
                }
            });
        } else {
            setUserForm(prevForm => ({
                ...prevForm,
                [name]: value,
            }));
        }
    };

    return (
        <form onSubmit={submitHandler} className='form-container'>
            <input type="text" id="fname" onChange={changeHandler} value={userForm.fname} name="fname" placeholder='First Name' /><br />
            <input type="text" id="lname" onChange={changeHandler} value={userForm.lname} name="lname" placeholder='Last Name' /> <br />
            <input type="text" id="age" onChange={changeHandler} value={userForm.age} name="age" placeholder='Age' /> <br />
            
           <div className='diet-container'>
           <div className='diet' style={{marginLeft:'-0.8rem', marginTop:'0.5rem'}}>
                <input type="radio" id="male" name="gender" value="male" onChange={changeHandler} checked={userForm.gender === 'male'} />
                <label htmlFor="male" style={{marginLeft:'-1.5rem'}}>Male</label>
            </div>
            <div className='diet' style={{marginLeft:'-0.8rem'}}>
                <input type="radio" id="female" name="gender" value="female" onChange={changeHandler} checked={userForm.gender === 'female'} />
                <label htmlFor="female" style={{marginLeft:'-1.5rem'}}>Female</label>
            </div>
           </div>
            
            <div style={{marginTop:'1rem'}}>
                <h3 htmlFor="destination" style={{marginLeft: '1rem'}}>Select Destination:</h3> <br/>
                <select id="destination" name="destination" onChange={changeHandler} value={userForm.destination} style={{marginTop:'-1rem'}}>
                    <option value="">Select a destination...</option>
                    <option value="Thailand">Thailand</option>
                    <option value="Japan">Japan</option>
                    <option value="Brazil">Brazil</option>
                </select>
            </div>
            
            <div style={{margin:'0 1rem', marginTop: '1rem'}}>
                <h3>Dietary Restrictions:</h3>
            </div>
            
           <div className='diet-container'>
           <div  className='diet' style={{marginLeft:'1rem'}}>
                <input type="checkbox" style={{marginLeft: '-20px'}} id="vegetarian" name="dietaryRestrictions" value="vegetarian" onChange={changeHandler} checked={userForm.dietaryRestrictions.includes('vegetarian')} />
                <label htmlFor="vegetarian" style={{marginLeft: '-20px'}}>Nuts free</label>
            </div>
            <div className='diet'style={{marginLeft:'1rem'}}>
                <input type="checkbox" style={{marginLeft: '-20px'}} id="vegan"  name="dietaryRestrictions" value="vegan" onChange={changeHandler} checked={userForm.dietaryRestrictions.includes('vegan')} />
                <label htmlFor="vegan" style={{marginLeft: '-20px'}}>Lactose free</label>
            </div>
            <div className='diet' style={{marginLeft:'1rem'}}>
                <input type="checkbox" style={{marginLeft: '-20px'}} id="glutenFree" name="dietaryRestrictions" value="glutenFree" onChange={changeHandler} checked={userForm.dietaryRestrictions.includes('glutenFree')} />
                <label htmlFor="glutenFree" style={{marginLeft: '-20px'}}>Vegan</label>
            </div>
           </div>
            
            <button type='submit' style={{marginTop:'1rem'}}>Submit</button>
        </form>
    );
}

export default UserForm;
