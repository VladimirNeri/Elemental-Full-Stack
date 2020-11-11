import React from 'react';
import Registration from './registration';

import { SignupStyl } from './signup.style'; 

const signup = () => {
  return (
    <SignupStyl>
    <div className='signup-container'>
      <div className='signup-registration'>
        <Registration />
      </div>
    </div>
    </SignupStyl>
  );
};

export default signup;
