import React from 'react'
import {Card, Button, Badge} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Article = (props) => {
    return(
        <Card variant='light' className='h-100'>
        <Card.Header>
            <h5 className='text-success'>{props.article.category}</h5>
        </Card.Header>
        <Card.Img variant='top' src={`/${props.article.image}`} fluid/>
        <Card.Title className='my-3 px-2'>
            {props.article.title.substring(0,50)} ...
        </Card.Title>
        <Card.Body>
            <Card.Text>
                {props.article.content.substring(0,200)} ...
            </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Link to={`/article/${props.article.id}`}>
            <Button variant='outline-info'>
                Read More
            </Button>
        </Link>
        <Badge variant='secondary' className='float-right'> 
                <span className='material-icons align-top'>visibility</span>
                <span className='ml-2 align-middle'>{props.article.views}</span>
            </Badge>
        </Card.Footer>
    </Card>
    )
}

export default Article