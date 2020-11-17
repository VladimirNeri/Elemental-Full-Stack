import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import CheckoutForm from '../Checkoutform/CheckoutForm';
import api from '../../utils/stripe';

import './stripe.css';

const stripePromise = api.getPublicStripeKey().then((key) => loadStripe(key));

export default function Stripe() {
  return (
    <div className='Stripe'>
      <div className='sr-root'>
        <div className='sr-main'>
   
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
}
