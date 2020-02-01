import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom';

import History from './utils/history';


import Login from '../src/layouts/login/login';
import Signup from './layouts/signup/signup';
import Home from '../src/layouts/home/home';
import NotFound from '../src/layouts/notFound/notFound';
import Editor from '../src/layouts/editor/editor';
function App() {
  return (
    <Router history={History}>
      <Switch>
        <Route exact path="/"
          render={() =>
            localStorage.sesToken ? (
              <Redirect to="/home" />
            ) : (
                <Redirect to="/login" />
              )
          }
        />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home"component={Home}/>
        <Route path="/404" component={NotFound} />
        <Redirect from="*" to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
