import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import { GlobalStyle } from './globalStyle.style';
import NotFound404 from './pages/NotFound404';

import HomePage from './pages/HomePage'
import AccessAccountPage from './pages/AccessAccountPage';
import MyHomePage from './pages/MyHomePage';

function App() {

  return (
    <Router>
      <GlobalStyle/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/home' component={HomePage}/>
        <Route exact path='/about' component={HomePage}/>
        <Route exact path='/getstart' component={HomePage}/>
        <Route exact path='/download' component={MyHomePage}/>
        <Route exact path='/access/:action' component={AccessAccountPage}/>
        <Route exactpath="/notFound404" component={NotFound404}/>

        <Redirect to="/notFound404" />
      </Switch>
    </Router>

  );
}

export default App;
