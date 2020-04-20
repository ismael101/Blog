import React, {Component} from 'react'
import { connect } from 'react-redux';
import {Container, Card, Row, Col, CardDeck, Badge, Media, Nav} from 'react-bootstrap'
class Index extends Component{
    render(){
        return(
            <div style={{fontFamily:'Gelasio'}}>
               <Container className='px-5 py-5 ' fluid>
                   <Row>
                       <Col xs={12} sm={8} md={8} lg={8}>
                       <h1 className='text-left'>Editor's Pick</h1>
                        <hr/>
                            <CardDeck>
                            <Card className='text-left' border="light">
                            <Card.Img variant="top" src={require(`../images/${this.props.sports[0].picture}`)} />
                            <Card.Body>
                            <Card.Title>{this.props.sports[0].title} <Badge variant='secondary'>{this.props.sports[0].category}</Badge></Card.Title>
                            <Card.Text>
                                {this.props.sports[0].content.slice(0,100)} ... <Nav.Link href={`/${this.props.sports[0].category}/${this.props.sports[0].id}`}>Read More</Nav.Link>
                            </Card.Text>
                            </Card.Body>
                            </Card>
                            <Card className='text-left' border="light">
                            <Card.Img variant="bottom" src={require(`../images/${this.props.travel[0].picture}`)} />
                            <Card.Body>
                            <Card.Title>{this.props.travel[0].title} <Badge variant='secondary'>{this.props.travel[0].category}</Badge></Card.Title>
                            <Card.Text>
                                {this.props.travel[0].content.slice(0,100)} ... <Nav.Link href={`/${this.props.travel[0].category}/${this.props.travel[0].id}`}>Read More</Nav.Link>
                            </Card.Text>
                            </Card.Body>
                            </Card>
                            <Card className='text-left' border="light">
                            <Card.Img variant="bottom" src={require(`../images/${this.props.politics[0].picture}`)} />
                            <Card.Body>
                            <Card.Title>{this.props.politics[0].title} <Badge variant='secondary'>{this.props.politics[0].category}</Badge></Card.Title>
                            <Card.Text>
                                {this.props.politics[0].content.slice(0,100)} ... <Nav.Link href={`/${this.props.politics[0].category}/${this.props.politics[0].id}`}>Read More</Nav.Link>
                            </Card.Text>
                            </Card.Body>
                            </Card>
                            </CardDeck>
                        </Col>
                        <Col xs={12} sm={4} md={4} lg={4}>
                        <h1 className='text-left'>Popular Articles</h1>
                        <hr/>
                        <Media>
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src={require(`../images/${this.props.business[0].picture}`)}
                            alt="Generic placeholder"
                        />
                        <Media.Body className='text-left'>
                        <h5>{this.props.business[0].title} <Badge variant='secondary'>{this.props.business[0].category}</Badge></h5>
                            <p>
                            {this.props.business[0].content.slice(0,50)} ... <Nav.Link href={`/${this.props.business[0].category}/${this.props.business[0].id}`}>Read More</Nav.Link>
                            </p>
                        </Media.Body>
                        </Media>
                        <Media>
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src={require(`../images/${this.props.sports[1].picture}`)}
                            alt="Generic placeholder"
                        />
                        <Media.Body className='text-left'>
                        <h5>{this.props.sports[1].title} <Badge variant='secondary'>{this.props.sports[1].category}</Badge></h5>
                            <p>
                            {this.props.sports[1].content.slice(0,50)} ... <Nav.Link href={`/${this.props.sports[1].category}/${this.props.sports[1].id}`}>Read More</Nav.Link>
                            </p>
                        </Media.Body>
                        </Media>
                        <Media>
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src={require(`../images/${this.props.travel[1].picture}`)}
                            alt="Generic placeholder"
                        />
                        <Media.Body className='text-left'>
                        <h5>{this.props.travel[1].title} <Badge variant='secondary'>{this.props.travel[1].category}</Badge></h5>
                            <p>
                            {this.props.travel[1].content.slice(0,50)} ... <Nav.Link href={`/${this.props.travel[1].category}/${this.props.travel[1].id}`}>Read More</Nav.Link>
                            </p>
                        </Media.Body>
                        </Media>
                        <Media>
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src={require(`../images/${this.props.politics[1].picture}`)}
                            alt="Generic placeholder"
                        />
                        <Media.Body className='text-left'>
                        <h5>{this.props.politics[1].title} <Badge variant='secondary'>{this.props.politics[1].category}</Badge></h5>
                            <p>
                            {this.props.politics[1].content.slice(0,50)} ... <Nav.Link href={`/${this.props.politics[1].category}/${this.props.politics[1].id}`}>Read More</Nav.Link>
                            </p>
                        </Media.Body>
                        </Media>
                        <Media>
                        <img
                            width={64}
                            height={64}
                            className="mr-3"
                            src={require(`../images/${this.props.business[1].picture}`)}
                            alt="Generic placeholder"
                        />
                        <Media.Body className='text-left'>
                        <h5>{this.props.business[1].title} <Badge variant='secondary'>{this.props.business[1].category}</Badge></h5>
                            <p>
                            {this.props.business[1].content.slice(0,50)} ... <Nav.Link href={`/${this.props.business[1].category}/${this.props.business[1].id}`}>Read More</Nav.Link>
                            </p>
                        </Media.Body>
                        </Media>
                        </Col>
                    </Row>
                </Container>
                <hr/>
                <Container fluid className='px-5 py-5'>
                        <CardDeck className='my-3'>
                                <Card className='text-left' border="light">
                                    <Row>
                                        <Col md='4'>
                                        <img
                                        width={320}
                                        className="mr-3"
                                        src={require(`../images/${this.props.politics[2].picture}`)}
                                        alt="Generic placeholder"
                                    />
                                        </Col>
                                        <Col md='auto'>
                                        </Col>
                                        <Col md='7'>
                                        <Card.Body>
                                        <Card.Title>{this.props.politics[2].title} <Badge variant='secondary'>{this.props.politics[2].category}</Badge> </Card.Title>
                                        <Card.Text>
                                        {this.props.politics[2].content.slice(0,100)} ... <Nav.Link href={`/${this.props.politics[2].category}/${this.props.politics[2].id}`}>Read More</Nav.Link>
                                        </Card.Text>
                                        </Card.Body>
                                        </Col>
                                    </Row>
                                    </Card>
                                <Card className='text-left' border="light">
                                    <Row>
                                        <Col md='4'>
                                        <img
                                        width={320}
                                        className="mr-3"
                                        src={require(`../images/${this.props.sports[2].picture}`)}
                                        alt="Generic placeholder"
                                    />
                                        </Col>
                                        <Col md='auto'>
                                        </Col>
                                        <Col md='7' className=''>
                                        <Card.Body>
                                        <Card.Title>{this.props.sports[2].title} <Badge variant='secondary'>{this.props.sports[2].category}</Badge></Card.Title>
                                        <Card.Text>
                                        {this.props.sports[2].content.slice(0,100)} ... <Nav.Link href={`/${this.props.sports[2].category}/${this.props.sports[2].id}`}>Read More</Nav.Link>
                                        </Card.Text>
                                        </Card.Body>
                                        </Col>
                                    </Row>
                                    </Card>
                                </CardDeck>
                                <CardDeck>
                                <Card className='text-left' border="light">
                                    <Row>
                                        <Col md='4'>
                                        <img
                                        width={320}
                                        className="mr-3"
                                        src={require(`../images/${this.props.business[2].picture}`)}
                                        alt="Generic placeholder"
                                    />
                                        </Col>
                                        <Col md='auto'>
                                        </Col>
                                        <Col md='7'>
                                        <Card.Body>
                                        <Card.Title>{this.props.business[2].title} <Badge variant='secondary'>{this.props.business[2].category}</Badge></Card.Title>
                                        <Card.Text>
                                        {this.props.business[2].content.slice(0,100)} ... <Nav.Link href={`/${this.props.business[2].category}/${this.props.business[2].id}`}>Read More</Nav.Link>
                                        </Card.Text>
                                        </Card.Body>
                                        </Col>
                                    </Row>
                                    </Card>
                                <Card className='text-left' border="light">
                                    <Row>
                                        <Col md='4'>
                                        <img
                                        width={320}
                                        className="mr-3"
                                        src={require(`../images/${this.props.travel[2].picture}`)}
                                        alt="Generic placeholder"
                                    />
                                        </Col>
                                        <Col md='auto'>
                                        </Col>
                                        <Col md='7' className=''>
                                        <Card.Body>
        <Card.Title>{this.props.travel[2].title} <Badge variant='secondary'>{this.props.travel[2].category}</Badge> </Card.Title>
                                        <Card.Text>
                                        {this.props.travel[2].content.slice(0,100)} ... <Nav.Link href={`/${this.props.travel[2].category}/${this.props.travel[2].id}`}>Read More</Nav.Link>
                                        </Card.Text>
                                        </Card.Body>
                                        </Col>
                                    </Row>
                                    </Card>
                            </CardDeck>
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
  export default connect(mapStateToProps,null)(Index);