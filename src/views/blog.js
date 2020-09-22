import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

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
          <Route path='/posts/fall' component={Fall} />
          <Route path='/posts/summer' component={Summer} />
          <Route path='/posts/spring' component={Spring} />
          <Route path='/posts/winter' component={Winter} />
        </Switch>
      </Router>
    </div>
  );
};

export default Blog;
