import React, { useState } from 'react';
import './App.css';

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  // const handleClick = (index) => {
  //   setLanguages(prevLanguages => {
  //     const updatedLanguages = [...prevLanguages]; 
  //     updatedLanguages[index] = { ...updatedLanguages[index], votes: updatedLanguages[index].votes + 1 }; 
  //     return updatedLanguages; 
  //   });
  // }
  const vote = (lang) => {
    lang.votes++
    setLanguages([...languages])
  }
  

  return (
    <div className="App">
      <h1>Vote Your Language !</h1>
      {languages.map((language, index) => (
        <div key={index} style={{display:'flex', border: '1px solid black', backgroundColor:'#ffebcd', margin:'5px', width: '25rem', justifyContent: 'space-around', alignItems:'center'}}>
          <span>{language.votes}</span>
          <p>{language.name}</p>
          <button style={{border: 'none', backgroundColor:'#ffebcd', color: 'green', fontSize:'1.5rem'}} onClick={() => vote(language)}>Click Here</button>
        </div>
      ))}
    </div>
  );
}

export default App;
