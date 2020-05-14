import React, {Component} from 'react'
import {Container, Row, Col, Jumbotron, Badge, Card} from 'react-bootstrap'
import Heading from '../components/Heading'
import Article from '../components/Article'
import axios from 'axios'

class Category extends Component{
    constructor(props){
        super(props)
        this.state = {category:'',articles:[]}
    }
    async componentWillMount(){
        let articles = await axios.post('/api/articles/category',{category:this.props.match.params.name})
        this.setState({category:this.props.match.params.name, articles:articles.data}) 
    }
    componentDidCatch(error){
        console.log(error)
    } 
    render(){
        const articleslist = this.state.articles.filter(article => article.id = this.state.articles[0].id).map(article => {
            return(
                <Col xl={4} className='my-3'>
                    <Article article={article}/>
                </Col>
            )
        })
        const articles = this.state.articles.length > 0 ? (
            <div>
                <Heading article={this.state.articles[0]}/>
                <Row className='my-5'>
                    {articleslist}
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
                    <h1 className='mt-3'>Latest Article</h1>
                    <hr/>
                    {articles}
                </Container>
            </div>
        )
    }
}

export default Category