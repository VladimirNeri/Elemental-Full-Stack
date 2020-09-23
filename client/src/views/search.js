import React from 'react'; 
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar/nav';
import Search from '../components/Search/search';

const Searchpage = () => { 
  return (
    <div className="container">
      <Helmet>
          <title>Elemental | Search</title>
          <meta name="description" content="Search Page" />
        </Helmet>
      <Navbar />
      <Search />
    </div>
  );
}

export default Searchpage;