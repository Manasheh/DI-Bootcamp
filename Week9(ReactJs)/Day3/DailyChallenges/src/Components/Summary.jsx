import React from 'react';

function Summary({ data }) {
  const { fname, lname, age, gender, destination, dietaryRestrictions } = data;

  return (
    <div className='summary'>
      <h3>Entered Information:</h3>
      <p>Your Name: {fname} {lname}</p>
      <p>Your Age: {age}</p>
      <p>Your Gender: {gender}</p>
      <p>Your Destination: {destination}</p>
      <p>Your Dietary Restrictions: {dietaryRestrictions.join(', ')}</p>
    </div>
  );
}

export default Summary;
