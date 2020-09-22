import React from 'react'; 
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar/nav';
import About from '../components/About/about';

const Signpage= () => { 
  return (
    <div className="container">
      <Helmet>
          <title>Elemental | About</title>
          <meta name="description" content="About Page" />
        </Helmet>
      <Navbar />
      <About/>
    </div>
  );
}

export default Signpage;