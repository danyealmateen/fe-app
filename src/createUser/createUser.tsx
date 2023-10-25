import React, { useState } from 'react';
import './createUser.css';

function CreateUser() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log('Visa ny sida');

    const response = await fetch('http://127.0.0.1:3000/api/v1/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, email }),
    });

    if (response.ok) {
      console.log('Login successful!');
    } else {
      console.log('Failed to login.');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} id='form'>
        <br />
        <input
          id='inputForUsername'
          type='text'
          value={username}
          placeholder='Username'
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          id='inputForEmail'
          type='email'
          value={email}
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          id='inputForPassword'
          type='password'
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button id='submitBtn' type='submit'>
          Submit
        </button>
      </form>
    </>
  );
}

export default CreateUser;
