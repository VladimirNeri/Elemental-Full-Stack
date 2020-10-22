import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './views/Main';
import About from './views/about';
import Portraits from './views/portraits';
import Nature from './views/nature';
import Blog from './views/blog';
import Submit from './views/submit';
import Search from './views/search';
import { useAuth0 } from "@auth0/auth0-react";
import history from "./utils/history";
import Loading from "./components/Loading/loading";

const App = () => {
  const { isLoading, error } = useAuth0();
  if (error) {
    return <div>Oops... {error.message}</div>;
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/about' component={About} />
        <Route path='/portraits' component={Portraits} />
        <Route path='/nature' component={Nature} />
        <Route path='/posts' component={Blog} />
        <Route path='/submit' component={Submit} />
        <Route path='/search' component={Search} />
      </Switch>
    </Router>
  );
};

export default App;
