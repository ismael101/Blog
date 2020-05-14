import React, {Component} from 'react'
import {Container, Image, Row, Col} from 'react-bootstrap'
import axios from 'axios'
class Article extends Component{
    constructor(props){
        super(props);
        this.state = {article:null}
    }
    async componentWillMount(){
        let article = await axios.get(`/api/articles/${this.props.match.params.id}`)
        this.setState({article:article.data})
    }
    componentDidCatch(error){
        console.log(error)
    } 
    render(){
        const article = this.state.article == null ? (
            <Container>
                <h1 className='display-1'>Article Not Found</h1>
            </Container>
        ):(
            <Container>
            <div className='my-5'>
                <span className='my-2'>
                    <h1>{this.state.article.title}</h1>
                </span>
            <hr/>
            <Image src={`/${this.state.article.image}`} fluid/>
            <div className='my-3'>
                <p className='lead'>
                    {this.state.article.content}
                </p>
            </div>
            </div>
            </Container>
        )
        return(
            <div>
                {article}
            </div>
        )
    }
}

export default Article