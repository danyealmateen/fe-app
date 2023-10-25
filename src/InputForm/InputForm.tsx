import React, { useState } from 'react';
import './InputForm.css';

function InputForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

  const response = await fetch('http://localhost.3000/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if(response.ok) {
    console.log('Inloggning lyckades!')
  }

  return (
    <>
      <form id='form'>
        <br />
        <input id='inputForUsername' type='text' placeholder='Username' />
        <br />
        <input id='inputForPassword' type='password' placeholder='Password' />
        <br />
        <button id='submitBtn'>Submit</button>
      </form>
    </>
  );
}

export default InputForm;
