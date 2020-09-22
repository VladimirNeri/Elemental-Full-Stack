import React from 'react'; 
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar/nav';
import Portgal from '../components/Portraits/portgal';
import Footer from '../components/Footer/footer';

const Portraits = () => { 
  return (
    <div className="container">
        <Helmet>
          <title>Elemental | Portraits</title>
          <meta name="description" content="Portraits Gallery" />
          <meta name="theme-color" content="#008f68" />
        </Helmet>
      <Navbar />
      <Portgal />
      <Footer />
    </div>
  );
}

export default Portraits;