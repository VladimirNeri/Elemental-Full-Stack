import React, { useState } from 'react';
import Axios from 'axios';

function Registration(props) {
  const [regFirst, setRegFirst] = useState('');
  const [regLast, setRegLast] = useState('');
  const [regUsername, setRegUsername] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regPasswordConfirm, setRegPasswordConfirm] = useState('');

  const register = (e) => {
    e.preventDefault();
    console.log('submit');
    Axios({
      method: 'POST',
      data: {
        firstname: regFirst,
        lastname: regLast,
        username: regUsername,
        email: regEmail,
        password: regPassword,
        passwordConfirm: regPasswordConfirm,
      },
      withCredentials: true,
      url: '/api/signup',
    }).then((response) => {
      console.log('react', response.data);
    });
  };

  return (
    <>
      <div className='card' id='registration-card'>
        <div className='card-header'>
          <h4 id='registration-title'>Register</h4>
        </div>
        <div className='card-body'>
          <form id='registration'>
            <input
              type='text'
              className='form-control'
              id='organization'
              placeholder='First Name'
              onChange={(e) => setRegFirst(e.target.value)}
            />

            <input
              type='text'
              className='form-control'
              id='lastname'
              placeholder='Last Name'
              onChange={(e) => setRegLast(e.target.value)}
            />

            <input
              type='text'
              className='form-control'
              id='username'
              placeholder='Username'
              onChange={(e) => setRegUsername(e.target.value)}
            />

            <input
              name='email'
              type='email'
              className='form-control'
              id='email'
              placeholder='Email'
              onChange={(e) => setRegEmail(e.target.value)}
            />

            <input
              name='password'
              type='password'
              className='form-control'
              id='password1'
              placeholder='Password'
              onChange={(e) => setRegPassword(e.target.value)}
            />

            <input
              name='password2'
              type='password'
              className='form-control'
              id='password2'
              placeholder='Please confirm your Password'
              onChange={(e) => setRegPasswordConfirm(e.target.value)}
            />

            <button type='submit' className='btn' onClick={register}>Join Now!</button>
      
          </form>
        </div>
      </div>
    </>
  );
}

export default Registration;
