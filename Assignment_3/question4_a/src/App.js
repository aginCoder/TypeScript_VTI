import './App.css';
import React from 'react'; 

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
const fName = "Phạm Gia";
const lName = 'Ân';

function App(){
  return (
    <div className='MyApp'>
      <p>First Name: {fName}</p>
      <p>Last Name: {lName}</p>
      <h1>Full Name: {fullName(fName, lName)}</h1>
    </div>
  )
}

export default App;
