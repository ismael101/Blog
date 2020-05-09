import React, {Component} from 'react'
import {Navbar, Form, Button, FormControl} from 'react-bootstrap'
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
    render(){
        return(
            <Navbar bg="dark" variant="dark">
              <Link to='/'>
                <Navbar.Brand>News Now</Navbar.Brand>
              </Link>
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.state.search} onChange={this.handleChange}/>
                  <Button variant="dark" onClick={this.handleSearch}>Search</Button>
                </Form>
              </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default withRouter(Navigation)