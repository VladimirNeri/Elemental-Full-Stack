import React from 'react'; 
import Navbar from '../components/Navbar/nav';
import Signup from '../components/Signup/signup';

const Signpage= () => { 
  return (
    <div className="container">
      <Navbar />
      <Signup />
    </div>
  );
}

export default Signpage;