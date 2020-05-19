import React, {Component} from 'react'
import { Container } from 'react-bootstrap'

class NotFound extends Component{
    render(){
        return(
            <Container>
                <div className='text-white' style={{marginTop:'25%'}}>
                    <h1 className='display-1'>404</h1>
                    <hr/>
                    <h2 className='display-2'>Page Not Found</h2>
                </div>
            </Container>
        )
    }
}
export default NotFound