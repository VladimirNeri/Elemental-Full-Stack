import React from 'react'; 
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar/nav';
import About from '../components/About/about';

const AboutPage= () => { 
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

export default AboutPage;