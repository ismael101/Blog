import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import logo from './logo.svg';
import Navigation from './components/Navigation'
import Article from './views/Article'
import Category from './views/Category'
import Home from './views/Home'
import Search from './views/Search'
import NotFound from './views/NotFound'
import './App.css';

function App() {
  return (
    <div className="App">
          <Router>
              <Navigation/>
              <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/article/:id' exact component={Article}/>
                <Route path='/category/:name' component={Category}/>
                <Route path='/search' component={Search}/>
                <Route path='*' component={NotFound}/>               
              </Switch>
          </Router>
    </div>
  );
}

export default App;
