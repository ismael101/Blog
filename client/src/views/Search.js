import React, {Component} from 'react'
import Heading from '../components/Heading'
import {Card, Container, Image, Row, Col, Button} from 'react-bootstrap'
import axios from 'axios'

class Search extends Component{
    constructor(props){
        super(props)
        this.state = {articles:[]}
    }
    async componentDidMount(){
        let articles = await axios.get(`/api/articles/${this.props.location.search}`)
        this.setState({articles:articles.data})
    }
    componentDidCatch(error){
        console.log(error)
    } 
    render(){
        const list = this.state.articles.map(article => {
            return(
                <Heading article={article} key={article.id}/>
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