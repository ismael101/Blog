import React, {Component} from 'react'
import {Navbar, Form, Button, FormControl, Nav, NavDropdown} from 'react-bootstrap'
import {withRouter,Link} from 'react-router-dom'

class Navigation extends Component{
    constructor(props){
      super(props)
      this.state = {search:""}
      this.handleSearch = this.handleSearch.bind(this); 
      this.handleChange = this.handleChange.bind(this)
    }
    handleSearch(){
      this.props.history.push(`/search/?search=${this.state.search}`)
    }
    handleChange(e){
      this.setState({search:e.target.value})
      console.log(this.state.search)
    }
    componentDidCatch(){

    }
    render(){
        return(
            <Navbar bg="light" variant="light">
              <Link to='/'>
                <Navbar.Brand>News Now</Navbar.Brand>
              </Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Form inline onSubmit={this.handleSearch} className="ml-auto">
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.state.search} onChange={this.handleChange}/>
                  <Button type='submit' variant="secondary" onClick={this.handleSearch}>Search</Button>
                </Form>
              </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default withRouter(Navigation)