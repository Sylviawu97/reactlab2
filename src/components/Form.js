import React, { useState } from 'react';


const Form = () => {
    
const [Username, setUsername]=useState('');
const[Email,setEmail]=useState('');
const[Password,setPassword]=useState('');

const handleNameChange = (e) => {
    setUsername(e.target.value);
  };
const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
const handleSubmit = (e) => {
    e.preventDefault();
    const list={Name:`${Username}`,Email:`${Email}`,Password:`${Password}`}
    console.log(list);

}

  return (
    <form onSubmit={handleSubmit}>
    <div>
        
    <label htmlFor="Username">Username:</label>
      <input
        type="text"
        id="username"
        value={Username}
        onChange={handleNameChange}
      />
    </div>
    <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={Email}
          onChange={handleEmailChange}
        />
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
           type='password'
          id="password"
          value={Password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
  }

export default Form
