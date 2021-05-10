import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
//global style
import {ThemeProvider} from 'styled-components';
import { GlobalStyle } from './utils/globalStyle/globalStyle.style';
import Theme from './utils/globalStyle/theme.style';

// pages
import NotFound404 from './pages/NotFound404';
import HomePage from './pages/HomePage'
import AccessAccountPage from './pages/AccessAccountPage';
import MyHomePage from './pages/MyHomePage';



import MyTags from './pages/MyHomePage/MySummaries/MyTags'

function App() {

  return (
    <Router>
      <ThemeProvider theme= {Theme}>
      <GlobalStyle/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/home' component={HomePage}/>
          <Route exact path='/about' component={HomePage}/>
          <Route exact path='/getstart' component={HomePage}/>
          <Route exact path='/download' component={HomePage}/>
          <Route exact path='/myHome/:action' component={MyHomePage}/>
          <Route exact path='/myHome/:action/:task' component={MyHomePage}/>
          <Route exact path='/access/:action' component={AccessAccountPage}/>
          <Route exactpath="/notFound404" component={NotFound404}/>
          <Redirect to="/notFound404" />
        </Switch>
      </ThemeProvider>
      
    </Router>
  );
}

export default App;
