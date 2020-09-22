import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import App from './views/App';
import About from './views/about'; 
import Portraits from './views/portraits';
import Nature from './views/nature';
import Blog from './views/blog'; 
import Submit from './views/submit';
import Signpage from './views/signup'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/portraits" component={Portraits} />
        <Route path="/nature" component={Nature} />
        <Route path="/posts" component={Blog} />
        <Route path="/submit" component={Submit} />
        <Route path="/search" component={Signpage} />
      </Switch>
    </Router>,
  document.getElementById('root')
);
