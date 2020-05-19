import React, {Component} from 'react'
import Heading from '../components/Heading'
import {Container, Jumbotron} from 'react-bootstrap'
import axios from 'axios'

class Search extends Component{
    constructor(props){
        super(props)
        this.state = {articles:[]}
    }
    async componentDidMount(){
        console.log(this.props.match.params.keyword)
        let articles = await axios.get(`/api/articles/?search=${this.props.match.params.keyword}`)
        this.setState({articles:articles.data})
    }
    componentDidCatch(error, info) {
        console.log(error, info)
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
                <Jumbotron style={{backgroundColor:'black'}}>
                    <h1 className='my-3 display-2 text-white'>Search Results {this.state.articles.length}</h1>
                </Jumbotron>
                {listarticles}
            </Container>
        )
    }
}

export default Search