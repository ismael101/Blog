import React, {Component} from 'react'
import {Container, Image, Row, Col} from 'react-bootstrap'
import axios from 'axios'
import AOS from 'aos';
import 'aos/dist/aos.css';

class Article extends Component{
    constructor(props){
        super(props);
        this.state = {article:null}
    }
    async componentWillMount(){
        let article = await axios.get(`/api/articles/${this.props.match.params.id}`)
        this.setState({article:article.data})
    }
    componentDidCatch(error, info) {
        console.log(error, info)
    }
    render(){
        AOS.init({duration : 2000})
        const article = this.state.article == null ? (
            <Container>
                <h1 className='display-1'>Article Not Found</h1>
            </Container>
        ):(
            <Container className='text-white'>
            <div className='my-5'>
                <span className='my-2'>
                    <h1 data-aos={"fade-in"}>{this.state.article.title}</h1>
                    <Row className='my-3'>
                        <Col>
                            <h4 data-aos={"fade-in"}>{this.state.article.author}</h4>
                        </Col>
                        <Col>
                            <h4 className='float-right' data-aos={"fade-in"}>{Date(this.state.article.published).substring(0,15)}</h4>
                        </Col>
                    </Row>
                </span>
            <hr/>
            <Image src={`${this.state.article.image}`} fluid='true' data-aos={"fade-in"}/>
            <div className='my-3'>
                <p className='lead' data-aos={"fade-in"}>
                    {this.state.article.content}
                </p>
            </div>
                <h5><a href={this.state.article.url}>The rest of the article can be found here</a></h5> 
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