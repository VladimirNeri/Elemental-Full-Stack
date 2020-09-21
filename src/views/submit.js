import React from 'react'; 
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar/nav';
import Submitpage from '../components/Submit/submit';

const Submit = () => { 
  return (
    <div className="container">
      <Helmet>
          <title>Elemental | Submit</title>
          <meta name="description" content="Submit" />
        </Helmet>
      <Navbar />
      <Submitpage />
    </div>
  );
}

export default Submit;