import React from 'react';
import Registration from './registration';
import PaymentForm from './paymentform';
import { SignupStyl } from './signup.style'; 

const signup = () => {
  return (
    <SignupStyl>
    <div className='signup-container'>
      <div className='signup-registration'>
        <Registration />
      </div>
      <div className='signup-payment'>
        <PaymentForm />
      </div>
    </div>
    </SignupStyl>
  );
};

export default signup;
