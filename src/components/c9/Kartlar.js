import React from 'react'
import { Button, Card } from 'react-bootstrap'


const Kartlar = ({isim,yas,img,kurs}) => {
  return (

    <Card className='kartlar' style={{width:"18rem"}}>
      <Card.Img variant="top" src={img} style={{height:"300px"}} />
      <Card.Body>
        <Card.Title>{isim}</Card.Title>
        <Card.Title>{yas}</Card.Title>
        <Card.Text>
          {kurs}
        </Card.Text>
        <Button variant='danger'>Gonder</Button>
      </Card.Body>
    </Card>
  )
}

export default Kartlar