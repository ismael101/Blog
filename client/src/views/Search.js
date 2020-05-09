import React, {Component} from 'react'
import {Card, Container, Image, Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Search extends Component{
    constructor(props){
        super(props)
        this.state = {articles:[]}
    }
    async componentDidMount(){
        try{
            let articles = await axios.get(`/api/articles/${this.props.location.search}`)
            this.setState({articles:articles.data})
        }catch(err){
            console.log(err)
        }
    } 
    render(){
        const list = this.state.articles.map(article => {
            return(
                <Card border="light" className='my-3'>
                    <Row>
                        <Col xs='12' sm='6'>
                            <Image
                            width={512}
                            fluid='true'
                            className="mr-3"
                            src={`/${article.image}`}
                            />
                        </Col>
                        <Col xs='12' sm='6'>
                            <Card.Text className='py-5 px-5'>
                            <h5>{article.title}</h5>
                            <p>
                                {article.content.substring(0,300)} ...
                            </p>
                            <Link to={`/article/${article.id}`}>
                                <Button variant='outline-info'>
                                    Read More
                                </Button>
                            </Link>
                            </Card.Text>
                        </Col>
                    </Row>
                </Card>
            )
        })
        const listarticles = this.state.articles.length > 0 ? (
            <Container>
                {list}
            </Container>  
        ) : (
            <Container>
                <h1 className='display-1'>No Articles Found</h1>
            </Container>
        )

        return(
            <Container className='my-5'>
                <h1 className='my-3'>Search Results {this.state.articles.length}</h1>
                {listarticles}
            </Container>
        )
    }
}

export default Search