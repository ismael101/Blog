import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Article = (props) => {
    AOS.init({duration : 2000})
    return(
        <Card style={{backgroundColor:'black'}} className='text-white' border='dark' data-aos={"fade-up"}>
        <Card.Img variant='top' src={`${props.article.image}`} fluid/>
        <Card.Title className='my-3 px-2'>
            {props.article.title}
        </Card.Title>
        <Card.Body>
            <Card.Text>
                {props.article.description}
            </Card.Text>
            <Link className='mt-3' to={`/article/${props.article.id}`}>
            <Button variant='outline-light'>
                Read More
            </Button>
        </Link>
        </Card.Body>
    </Card>
    )
}

export default Article