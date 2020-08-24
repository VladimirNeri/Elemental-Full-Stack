import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import App from './views/App';
import Portraits from './views/portraits';
import Nature from './views/nature';
import Blog from './views/blog';
import Submit from './views/submit';
import Signpage from './views/signup';

import './index.css';

const Index = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/portraits' component={Portraits} />
        <Route path='/nature' component={Nature} />
        <Route path='/posts' component={Blog} />
        <Route path='/submit' component={Submit} />
        <Route path='/signup' component={Signpage} />
      </Switch>
    </Router>
  );
};
ReactDOM.render(<Index />, document.getElementById('root'));
