import React from 'react'
import { Card } from 'react-bootstrap'

const CardBusiness = (props) => {
    const {id,name,avatar,firstName}=props
  return (
    <Card className='h-100'>
    <Card.Img variant="top" src={`${avatar}?${id}`} />
    <Card.Body>
      <Card.Title>{id}</Card.Title>
      <Card.Title>{name}</Card.Title>
      <Card.Subtitle>{firstName}</Card.Subtitle>
    </Card.Body>
  </Card>
  )
}

export default CardBusiness