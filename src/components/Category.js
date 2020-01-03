import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Container, Media, Badge, Card, Nav} from 'react-bootstrap'
class Category extends Component{
    componentDidMount(){
    }
    render(){
        let headline = () => {
            if(this.props.location.pathname === '/sports'){
                return 'Sports'
            }
            else if(this.props.location.pathname === '/business'){
                return 'Business'
            }
            else if(this.props.location.pathname === '/politics'){
                return 'Politics'
            }
            else if(this.props.location.pathname === '/travel'){
                return 'Travel'
            }
            else{
                return null
            }
        }
        let articles = []
        if(this.props.location.pathname === '/sports'){
            articles = this.props.sports.map(article => {
                return(
                    <Card className='px-5 py-5 my-5' key={article.id}>
                    <Media key={article.id}>
                    <img
                        width={256}
                        className="mr-3"
                        src={require(`../images/${article.picture}`)}
                        alt="Generic placeholder"
                    />
                    <Media.Body className='text-left'>
                    <h5>{article.title} <Badge variant='secondary'>{article.category}</Badge></h5>
                        <p>
                        {article.content.slice(0,400)} ... <Nav.Link href={`/${article.category}/${article.id}`}>Read More</Nav.Link>
                        </p>
                    </Media.Body>
                    </Media>
                    </Card>
                )
            })
        }
        else if(this.props.location.pathname === '/business'){
            articles = this.props.business.map(article => {
                return(
                    <Card className='px-5 py-5 my-5' key={article.id}>
                    <Media key={article.id}>
                    <img
                        width={256}
                        className="mr-3"
                        src={require(`../images/${article.picture}`)}
                        alt="Generic placeholder"
                    />
                    <Media.Body className='text-left'>
                    <h5>{article.title} <Badge variant='secondary'>{article.category}</Badge></h5>
                        <p>
                        {article.content.slice(0,400)} ... <Nav.Link href={`/${article.category}/${article.id}`}>Read More</Nav.Link>
                        </p>
                    </Media.Body>
                    </Media>
                    </Card>
                )
            })
        }
        else if(this.props.location.pathname === '/politics'){
            articles = this.props.politics.map(article => {
                return(
                    <Card className='px-5 py-5 my-5' key={article.id}>
                    <Media key={article.id}>
                    <img
                        width={256}
                        className="mr-3"
                        src={require(`../images/${article.picture}`)}
                        alt="Generic placeholder"
                    />
                    <Media.Body className='text-left'>
                    <h5>{article.title} <Badge variant='secondary'>{article.category}</Badge></h5>
                        <p>
                        {article.content.slice(0,400)} ... <Nav.Link href={`/${article.category}/${article.id}`}>Read More</Nav.Link>
                        </p>
                    </Media.Body>
                    </Media>
                    </Card>
                )
            })
        }
        else if(this.props.location.pathname === '/travel'){
            articles = this.props.travel.map(article => {
                return(
                    <Card className='px-5 py-5 my-5' key={article.id}>
                    <Media key={article.id}>
                    <img
                        width={256}
                        className="mr-3"
                        src={require(`../images/${article.picture}`)}
                        alt="Generic placeholder"
                    />
                    <Media.Body className='text-left'>
                    <h5>{article.title} <Badge variant='secondary'>{article.category}</Badge></h5>
                        <p>
                        {article.content.slice(0,400)} ... <Nav.Link href={`/${article.category}/${article.id}`}>Read More</Nav.Link>
                        </p>
                    </Media.Body>
                    </Media>
                    </Card>
                )
            })
        }
        else{
            return null
        }
        return(
            <div className='text-left' style={{fontFamily:'Gelasio'}}>
                <Container>
                <h1 className='mt-5'>{headline()}</h1>
                <hr/>
                <div>
                    {articles}
                </div>
                </Container>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    sports: state.sports.articles,
    travel: state.travel.articles,
    business: state.business.articles,
    politics: state.politics.articles
  });
  export default connect(mapStateToProps,null)(Category);