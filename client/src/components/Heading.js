import React from 'react'
import {Card, Row, Col, Image, Button, Badge} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Heading = (props) => {
    return(
        <Card border="light" className='my-3'>
        <Row>
            <Col xs='12' sm='6'>
                <Image
                width={512}
                fluid='true'
                className="mr-3"
                src={`/${props.article.image}`}
                />
            </Col>
            <Col xs='12' sm='6'>
                <Card.Title className='px-2 mt-3'>
                    <span className='text-success'>{props.article.category}</span>
                    <Badge variant='secondary' className='float-right'> 
                        <span className='material-icons align-top'>visibility</span>
                        <span className='ml-2 align-middle'>{props.article.views}</span>
                    </Badge>
                </Card.Title>
                <Card.Text className='py-5 px-5'>
                <h5>{props.article.title}</h5>
                <p>
                    {props.article.content.substring(0,300)} ...
                </p>
                <Link to={`/article/${props.article.id}`}>
                    <Button variant='outline-info'>
                        Read More
                    </Button>
                </Link>
                </Card.Text>
            </Col>
        </Row>
    </Card>
    )
}

export default Heading