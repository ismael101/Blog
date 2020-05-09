import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Jumbotron, Button, Card, Container, Row, Col, Navbar, Nav ,Badge} from 'react-bootstrap'
import axios from 'axios'
class Home extends Component{
    constructor(props){
        super(props)
        this.state = {latest:[],popular:[]}
    }
    async componentWillMount(){
        try{
            let latest = await axios.get('/api/articles/')
            let popular = await axios.get('/api/articles/popular')
            this.setState({latest:latest.data,popular:popular.data})
        }catch(err){
            console.log(err)
        }
    }
    render(){
        const latest = this.state.latest.length > 0 ? (
            <div>
                <Card className='py-5 px-5'>
        <Card.Title><span className='text-success'>{this.state.latest[0].category}</span>
        <Badge variant='secondary' className='float-right'> 
            <span className='material-icons align-top'>visibility</span>
            <span className='ml-2 align-middle'>{this.state.latest[0].views}</span>
        </Badge>
        </Card.Title>
                    <Card.Title>{this.state.latest[0].title} ...</Card.Title>
                    <Card.Text>
                    {this.state.latest[0].content.substring(0,150)} ...
                    </Card.Text>
                    <Card.Text>
                        <Link to={`/article/${this.state.latest[0].id}`}>
                            <Button variant='outline-info'>
                                    Read More
                            </Button>
                        </Link>
                    </Card.Text>
                </Card>
                <Row>
                    <Col xs={12} sm={6}>
                        <Card className='py-5 px-5 mt-4'>
                            <Card.Title>
                                <span className='text-success'>
                                    {this.state.latest[1].category}
                                </span>
                                <Badge variant='secondary' className='float-right'> 
                                    <span className='material-icons align-top'>visibility</span>
                                    <span className='ml-2 align-middle'>{this.state.latest[1].views}</span>
                                </Badge>
                                </Card.Title>
                            <Card.Title>{this.state.latest[1].title.substring(0,30)} ...</Card.Title>
                            <Card.Text>
                                {this.state.latest[1].content.substring(0,150)} ...
                            </Card.Text>
                            <Card.Text>
                                <Link to={`/article/${this.state.latest[1].id}`}>
                                    <Button variant='outline-info'>
                                            Read More
                                    </Button>
                                </Link>
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6}>
                        <Card className='py-5 px-5 mt-4'>
                            <Card.Title>
                                <span className='text-success'>{this.state.latest[2].category}</span>
                                <Badge variant='secondary' className='float-right'> 
                                    <span className='material-icons align-top'>visibility</span>
                                    <span className='ml-2 align-middle'>{this.state.latest[2].views}</span>
                                </Badge>
                            </Card.Title>
                            <Card.Title>{this.state.latest[2].title.substring(0,30)} ...</Card.Title>
                            <Card.Text>
                                {this.state.latest[2].content.substring(0,150)} ...
                            </Card.Text>
                            <Card.Text>
                            <Link to={`/article/${this.state.latest[2].id}`}>
                                <Button variant='outline-info'>
                                        Read More
                                </Button>
                            </Link>
                            </Card.Text>
                        </Card>
                    </Col>
                </Row>
            </div>
        ) : (
            <div>
            </div>
        )
        const popular = this.state.popular.length > 0 ? (
            <div>
                <Row className='mb-5'>
                    <Col xs={12} sm={6}>
                        <Card className='mb-3 py-5 px-5'>
                        <Card.Title>
                            <span className='text-success'>{this.state.popular[0].category}</span>
                            <Badge variant='secondary' className='float-right'> 
                                <span className='material-icons align-top'>visibility</span>
                                <span className='ml-2 align-middle'>{this.state.popular[0].views}</span>
                            </Badge>
                        </Card.Title>
                        <Card.Title>{this.state.latest[0].title.substring(0,30)} ...</Card.Title>
                        <Card.Text>
                        {this.state.popular[0].content.substring(0,150)} ...
                        </Card.Text>
                        <Card.Text>
                        <Link to={`/article/${this.state.popular[0].id}`}>
                            <Button variant='outline-info'>
                                    Read More
                            </Button>
                        </Link>
                        </Card.Text>
                    </Card>
                    </Col>
                    <Col xs={12} sm={6}>
                    <Card className='py-5 px-5'>
                            <Card.Title>
                                <span className='text-success'>{this.state.popular[1].category}</span>
                                <Badge variant='secondary' className='float-right'> 
                                    <span className='material-icons align-top'>visibility</span>
                                    <span className='ml-2 align-middle'>{this.state.popular[1].views}</span>
                                </Badge>    
                            </Card.Title>
                            <Card.Title>{this.state.popular[1].title.substring(0,30)} ...</Card.Title>
                            <Card.Text>
                                {this.state.popular[1].content.substring(0,150)} ...
                            </Card.Text>
                            <Card.Text>
                            <Link to={`/article/${this.state.popular[1].id}`}>
                                <Button variant='outline-info'>
                                        Read More
                                </Button>
                            </Link>
                            </Card.Text>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6}>
                    <Card className='mb-3 py-5 px-5'>
                            <Card.Title>
                                <span className='text-success'>
                                    {this.state.popular[2].category}
                                </span>
                                <Badge variant='secondary' className='float-right'> 
                                    <span className='material-icons align-top'>visibility</span>
                                    <span className='ml-2 align-middle'>{this.state.popular[2].views}</span>
                                </Badge>
                            </Card.Title>
                            <Card.Title>{this.state.popular[2].title.substring(0,30)} ...</Card.Title>
                            <Card.Text>
                                {this.state.popular[2].content.substring(0,150)} ...
                            </Card.Text>
                            <Card.Text>
                            <Link to={`/article/${this.state.popular[2].id}`}>
                                <Button variant='outline-info'>
                                        Read More
                                </Button>
                            </Link>
                            </Card.Text>
                        </Card>
                        </Col>
                        <Col xs={12} sm={6}>
                        <Card className='py-5 px-5'>
                            <Card.Title>
                                <span className='text-success'>{this.state.popular[3].category}</span>
                                <Badge variant='secondary' className='float-right'> 
                                    <span className='material-icons align-top'>visibility</span>
                                    <span className='ml-2 align-middle'>{this.state.popular[3].views}</span>
                                </Badge>    
                            </Card.Title>
                            <Card.Title>{this.state.popular[3].title.substring(0,30)} ...</Card.Title>
                            <Card.Text>
                                {this.state.popular[3].content.substring(0,150)} ...
                            </Card.Text>
                            <Card.Text>
                            <Link to={`/article/${this.state.popular[3].id}`}>
                                <Button variant='outline-info'>
                                        Read More
                                </Button>
                            </Link>
                            </Card.Text>
                        </Card>
                    </Col>
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
                <Jumbotron className='bg-dark'>
                    <Container>
                        <h1 className='text-white'>Latest Articles</h1>
                        {latest}
                    </Container>
                </Jumbotron>
                <br/>
                <Jumbotron className='bg-info'>
                    <Container>
                        <h1 className='text-white'>Popular Articles</h1>
                        {popular}
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}

export default Home