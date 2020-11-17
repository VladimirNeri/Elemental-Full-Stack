import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './views/Main';
import About from './views/about';
import Portraits from './views/portraits';
import Nature from './views/nature';
import Blog from './views/blog';
import Submit from './views/submit';
import Search from './views/search';
import Signup from './views/signup';
import Payment from './views/stripe';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/about' component={About} />
        <Route path='/portraits' component={Portraits} />
        <Route path='/nature' component={Nature} />
        <Route path='/posts' component={Blog} />
        <Route path='/submit' component={Submit} />
        <Route path='/search' component={Search} />
        <Route path='/signup' component={Signup} />
        <Route path='/payment' component={Payment} />
      </Switch>
    </Router>
  );
};

export default App;
