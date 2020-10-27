import React from 'react'; 
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar/nav';
import Registration from '../components/Signup/signup';

const Signup = () => { 
  return (
    <div className="container">
      <Helmet>
          <title>Elemental | SingUp</title>
          <meta name="description" content="Submit" />
        </Helmet>
      <Navbar />
      <Registration />
    </div>
  );
}

export default Signup;