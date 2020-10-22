import React from 'react';
import Navbar from '../components/Navbar/nav';
import Gallery from '../components/Gallery/gallery';
import Hero from '../components/Hero/hero';
import Footer from '../components/Footer/footer';
import { Helmet } from 'react-helmet';

const Main = () => {
  return (
    <div className='container'>
      <Helmet>
        <title>Elemental | Home</title>
        <meta name='elemental' content='Home' />
      </Helmet>
      <Navbar />
      <Hero />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Main;