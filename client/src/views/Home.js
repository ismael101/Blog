import React, {Component} from 'react'
import Article from '../components/Article'
import {Jumbotron, Container, Row, Col, Navbar, Nav ,} from 'react-bootstrap'
import axios from 'axios'
class Home extends Component{
    constructor(props){
        super(props)
        this.state = {latest:[],popular:[]}
    }
    async componentWillMount(){
        let latest = await axios.get('/api/articles/')
        let popular = await axios.get('/api/articles/popular')
        this.setState({latest:latest.data,popular:popular.data})
    }
    componentDidCatch(error){
        console.log(error)
    } 
    render(){
        const latestlist = this.state.latest.map(article => {
            return(
                <Col xl={4} className='my-3'>
                    <Article article={article} key={article.id}/>
                </Col>
            )
        })
        const latest = this.state.latest.length > 0 ? (
            <div>
                <Row>
                    {latestlist}
                </Row>
            </div>
        ) : (
            <div>
            </div>
        )
        const popularlist = this.state.popular.map(article => {
            return(
                <Col xl={4} className='my-3'>
                    <Article article={article} key={article.id}/>
                </Col>
            )
        })
        const popular = this.state.popular.length > 0 ? (
            <div>
                <Row className='mb-5'>
                    {popularlist}
                </Row>
            </div>
        ) : (
            <div>
            </div>
        )
        return(
            <div>
                <Navbar bg="light" variant="light" sticky='top' style={{background:'transparent'}}>
                    <Nav className="mx-auto">
                        <Nav.Link href='/category/politics'>Politics</Nav.Link>
                        <Nav.Link href='/category/economy'>Economy</Nav.Link>
                        <Nav.Link href='/category/sports'>Sports</Nav.Link>
                        <Nav.Link href='/category/travel'>Travel</Nav.Link>
                    </Nav>
                </Navbar>
                    <Container>
                        <h1 className='my-5'>Latest Articles</h1>
                        <hr/>
                        {latest}
                        <h1 className='my-5'>Popular Articles</h1>
                        <hr/>
                        {popular}
                    </Container>
            </div>
        )
    }
}

export default Home