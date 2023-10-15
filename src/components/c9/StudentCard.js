import React from 'react'
import data from "../../assets/data/students.json"
import { Col, Container, Row} from "react-bootstrap"
import Kartlar from './Kartlar'
import "./card.scss"



const StudentCard = () => {
  return (

    <Container className='text-center'>
        <Row className='mb-3'>

            {

                data.map((student,index)=><Col key={index} md={6} lg={3} xl={4}  >
                <Kartlar {...student} />
                </Col>)
            }
        </Row>
    </Container>
    
  )
}

export default StudentCard