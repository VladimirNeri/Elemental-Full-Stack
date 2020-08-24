import React from 'react'; 
import Navbar from '../components/Navbar/nav';
import Natgal from '../components/Nature/natgal';

const Nature = () => { 
  return (
    <div className="container">
      <Navbar />
      <Natgal/>
    </div>
  );
}

export default Nature;