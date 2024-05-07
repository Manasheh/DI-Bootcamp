import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import UserForm from './Components/UserForm';
import Summary from './Components/Summary';

function App() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    age: '',
    gender: '',
    destination: '',
    dietaryRestrictions: []
  });

  const submitForm = (data) => {
    setFormData(data);
  };

  return (
    <div className='app-container'>
      <Navbar />
      <UserForm onSubmit={submitForm} />
      <Summary data={formData} />
    </div>
  );
}

export default App;
