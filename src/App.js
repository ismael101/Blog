import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import Index from './components/Index'
import Category from './components/Category'
import Article from './components/Article'
import {Container, Navbar, Nav} from 'react-bootstrap'
import store from './store'
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Provider store={store}>
          <Navbar className='bg-dark' variant="dark">
            <Navbar.Brand href="/">News</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/Sports">Sports</Nav.Link>
              <Nav.Link href="/Travel">Travel</Nav.Link>
              <Nav.Link href="/Business">Business</Nav.Link>
              <Nav.Link href="/Politics">Politics</Nav.Link>
            </Nav>
          </Navbar>
            <Switch>
              <Route path='/' exact component={Index}></Route>
              <Route path='/Sports' component={Category}></Route>
              <Route path='/Politics' component={Category}></Route>
              <Route path='/Travel' component={Category}></Route>
              <Route path='/Business' component={Category}></Route>
              <Route path='/Sports/:id' component={Article}></Route>
              <Route path='/Politics/:id' component={Article}></Route>
              <Route path='/Travel/:id' component={Article}></Route>
              <Route path='/Business/:id' component={Article}></Route>
            </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
