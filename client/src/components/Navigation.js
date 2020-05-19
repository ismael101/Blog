import React, {Component} from 'react'
import {Navbar, Form, Button, FormControl} from 'react-bootstrap'
import {withRouter,Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

class Navigation extends Component{
    constructor(props){
      super(props)
      this.state = {search:""}
      this.handleSearch = this.handleSearch.bind(this); 
      this.handleChange = this.handleChange.bind(this)
    }
    handleSearch(){
      const keyword = this.state.search
      this.props.history.push(`/search=${keyword}`) 
    }
    handleChange(e){
      this.setState({search:e.target.value})
    }
    componentDidCatch(error, info) {
      console.log(error, info)
    }
    render(){
        return(
            <Navbar style={{backgroundColor:'black'}}>
              <Link to='/'>
                <Navbar.Brand className='text-white mr-auto'>Crypto Currency News</Navbar.Brand>
              </Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Form inline onSubmit={this.handleSearch} className="ml-auto">
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.state.search} onChange={this.handleChange}/>
                  <Button type='submit' variant="outline-light" onClick={this.handleSearch}>Search</Button>
                </Form>
              </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default withRouter(Navigation)