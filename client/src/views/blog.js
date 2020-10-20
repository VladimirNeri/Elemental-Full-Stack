import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Navbar from '../components/Navbar/nav';
import Fall from '../components/Blog/fall';
import Summer from '../components/Blog/summer';
import Spring from '../components/Blog/spring';
import Winter from '../components/Blog/winter';

const Blog = () => {

  return (
    <div className='container'>
      <Navbar />
      <Router>
        <Switch>
          <Auth0Provider>
            <Route path='/posts/fall' component={Fall} />
            <Route path='/posts/summer' component={Summer} />
            <Route path='/posts/spring' component={Spring} />
            <Route path='/posts/winter' component={Winter} />
          </Auth0Provider>
        </Switch>
      </Router>
    </div>
  );
};

export default Blog;
