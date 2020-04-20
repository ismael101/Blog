import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import Index from './components/Index'
import Category from './components/Category'
import Article from './components/Article'
import {Navbar, Nav} from 'react-bootstrap'
import store from './store'
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Provider store={store}>
          <Navbar className='bg-dark' variant="dark" style={{fontFamily:'Gelasio'}}>
            <Navbar.Brand href="/">News</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/sports">Sports</Nav.Link>
              <Nav.Link href="/travel">Travel</Nav.Link>
              <Nav.Link href="/business">Business</Nav.Link>
              <Nav.Link href="/politics">Politics</Nav.Link>
            </Nav>
          </Navbar>
            <Switch>
              <Route path='/' exact component={Index}></Route>
              <Route path='/sports' exact component={Category}></Route>
              <Route path='/politics' exact component={Category}></Route>
              <Route path='/travel' exact component={Category}></Route>
              <Route path='/business' exact component={Category}></Route>
              <Route path='/sports/:id' component={Article}></Route>
              <Route path='/politics/:id' component={Article}></Route>
              <Route path='/travel/:id' component={Article}></Route>
              <Route path='/business/:id' component={Article}></Route>
            </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
