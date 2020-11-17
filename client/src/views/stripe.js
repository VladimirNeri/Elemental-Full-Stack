import React from 'react'; 
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar/nav';
import Stripe from '../components/Stripe/stripe';

const Payment = () => { 
  return (
    <div className="container">
      <Helmet>
          <title>Elemental | Payment </title>
          <meta name="description" content="Submit" />
        </Helmet>
      <Navbar />
      <Stripe />
    </div>
  );
}

export default Payment;