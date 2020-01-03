import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'

class Article extends Component{
    render(){
        console.log(this.props)
        let article = []
        if(this.props.match.path === '/sports/:id'){
            console.log('sports')
            article = this.props.sports.filter(article => article.id == this.props.match.params.id)
        }
        else if(this.props.match.path === '/business/:id'){
            console.log('business')
            article = this.props.business.filter(article => article.id == this.props.match.params.id)
        }
        else if(this.props.match.path === '/politics/:id'){
            console.log('politics')
            article = this.props.politics.filter(article => article.id == this.props.match.params.id)
        }
        else if(this.props.match.path === '/travel/:id'){
            console.log('travel')
            article = this.props.travel.filter(article => article.id == this.props.match.params.id)
        }
        else{
        }
        console.log(article)
        return(
            <div style={{fontFamily:'Gelasio'}}>
                <Container fluid className='px-5 py-5'>
                        <h1 className='my-5'>{article[0].title}</h1>
                        <Row>
                            <Col>
                            <h5 className='text-right'>{article[0].author}</h5>
                            </Col>
                            <Col>
                            <h5 className='text-left'>{article[0].date}</h5>  
                            </Col>
                        </Row>
                        <hr/>
                        <img
                        width={1280}
                        className="my-5"
                        src={require(`../images/${article[0].picture}`)}
                        alt="Generic placeholder"
                    />
                        <Container>
                            <h5>
                                {article[0].content}
                            </h5>
                        </Container>                       
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
  export default connect(mapStateToProps,null)(Article);