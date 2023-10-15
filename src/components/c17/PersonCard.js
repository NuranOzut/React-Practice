import React from 'react'
import { Card } from 'react-bootstrap'

const PersonCard = (props) => {
  return (
    <Card style={{ width: '18rem',height:"30rem" }}>
      <Card.Img variant="top" src={props.avatar} />
      <Card.Body>
      <Card.Subtitle>{props.id}  </Card.Subtitle>
        <Card.Title>{props.userName}</Card.Title>
        <Card.Subtitle>{props.firstName} {props.lastName}  </Card.Subtitle>
        <Card.Text>
         {props.job}
        </Card.Text>

        <Card.Title>{props.email}</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default PersonCard