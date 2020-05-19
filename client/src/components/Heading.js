import React from 'react'
import {Card, Row, Col, Image, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Heading = (props) => {
    AOS.init({duration : 2000})
    return(
        <Card className='my-5' style={{backgroundColor:'black'}} data-aos={'fade-in'}>
            <Row>
                <Col xs={12} sm={6}>
                <Image
                width={512}
                fluid='true'
                className="mr-3"
                src={`${props.article.image}`}
                />
                </Col>
                <Col xs={12} sm={6} className='py-5 px-5 text-white'>
                <h5>{props.article.title}</h5>
                <p>{props.article.description}</p>
                <Link to={`/article/${props.article.id}`}>
                    <Button variant='outline-light'>
                        Read More
                    </Button>
                </Link>
                </Col>
            </Row>
        </Card>
    )
}

export default Heading