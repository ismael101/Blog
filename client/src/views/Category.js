import React, {Component} from 'react'
import {Container, Row, Col, Media, Jumbotron, Badge, Card, Button} from 'react-bootstrap'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Category extends Component{
    constructor(props){
        super(props)
        this.state = {category:'',articles:[]}
    }
    async componentWillMount(){
        try{
            let articles = await axios.post('/api/articles/category',{category:this.props.match.params.name})
            this.setState({category:this.props.match.params.name, articles:articles.data}) 
        }catch(err){
            console.log(err)
        }
    }
    render(){
        const articles = this.state.articles.length > 0 ? (
            <div>
                    <Media>
                    <img
                    width={512}
                    fluid
                    className="mr-3"
                    src={`/${this.state.articles[0].image}`}
                    />
                        <Media.Body className='py-5 px-5'>
                            <h5>{this.state.articles[0].title}</h5>
                            <p>
                                {this.state.articles[0].content.substring(0,300)} ...
                            </p>
                            <Link to={`/article/${this.state.articles[0].id}`}>
                                <Button variant='outline-info'>
                                    Read More
                                </Button>
                            </Link>
                        </Media.Body>
                    </Media>
                <Row className='my-5'>
                    <Col>
                        <Card variant='light' className='h-100'>
                            <Card.Img variant='top' src={`/${this.state.articles[1].image}`} fluid/>
                            <Card.Title className='my-3 px-2'>
                                {this.state.articles[1].title}
                            </Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    {this.state.articles[1].content.substring(0,100)}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Link to={`/article/${this.state.articles[1].id}`}>
                                <Button variant='outline-info'>
                                    Read More
                                </Button>
                            </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card variant='light' className='h-100'>
                            <Card.Img variant='top' src={`/${this.state.articles[2].image}`} fluid/>
                            <Card.Title className='my-3 px-2'>
                                {this.state.articles[2].title}
                            </Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    {this.state.articles[2].content.substring(0,100)}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Link to={`/article/${this.state.articles[2].id}`}>
                                <Button variant='outline-info'>
                                    Read More
                                </Button>
                            </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card variant='light' className='h-100'>
                            <Card.Img variant='top' src={`/${this.state.articles[3].image}`} fluid/>
                            <Card.Title className='my-3 px-2'>
                                {this.state.articles[3].title}
                            </Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    {this.state.articles[3].content.substring(0,100)}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Link to={`/article/${this.state.articles[3].id}`}>
                                <Button variant='outline-info'>
                                    Read More
                                </Button>
                            </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card variant='light' className='h-100'>
                            <Card.Img variant='top' src={`/${this.state.articles[4].image}`} fluid/>
                            <Card.Title className='my-3 px-2'>
                                {this.state.articles[4].title}
                            </Card.Title>
                            <Card.Body>
                                <Card.Text>
                                    {this.state.articles[4].content.substring(0,100)}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Link to={`/article/${this.state.articles[4].id}`}>
                                <Button variant='outline-info'>
                                    Read More
                                </Button>
                            </Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </div>
        ) : (
            <div>
                <h1 className='display-1'>No Articles Found</h1>
            </div>
        )
        return(
            <div>
                <Container>
                    <Jumbotron className='bg-light'>
                        <Badge variant='secondary' className='py-2 px-3'><h1 className='display-1 text-capitalize'><strong>{this.state.category}</strong></h1></Badge>
                    </Jumbotron>
                    <hr/>
                    {articles}
                </Container>
            </div>
        )
    }
}

export default Category