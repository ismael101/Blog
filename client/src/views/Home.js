import React, {Component} from 'react'
import Article from '../components/Article'
import {Jumbotron, Container, CardColumns} from 'react-bootstrap'
import axios from 'axios'
import AOS from 'aos';
import 'aos/dist/aos.css';

class Home extends Component{
    constructor(props){
        super(props)
        this.state = {articles:[]}
    }
    async componentWillMount(){
        let articles = await axios.get('/api/articles/')
        this.setState({articles:articles.data})
    }
    componentDidCatch(error, info) {
        console.log(error, info)
    }  
    render(){
        const articleslist = this.state.articles.map(article => {
            return(
                <Article article={article} key={article.id}/>
            )
        })
        const articles = this.state.articles.length > 0 ? (
            <div>
                    {articleslist}
            </div>
        ) : (
            <div>
            </div>
        )
        AOS.init({duration : 2000})      
        return(
            <div>
                <Jumbotron fluid='true' style={{backgroundColor:'black'}}>
                    <Container>
                        <h1 className='text-center text-white display-1 mt-5' data-aos={"fade-right"}>Crypto News</h1>
                    </Container>
                </Jumbotron>
                <Container>
                <h1 className='my-5 text-white' data-aos={'fade-right'}>Latest Articles</h1>
                <hr/>
                <CardColumns>
                {articles}
                </CardColumns>
                </Container>
        </div>
        )
    }
}

export default Home