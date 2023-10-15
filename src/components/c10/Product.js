import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Product = ({id,image,desc,title,price}) => {

/*   const {id,image,desc,title,price}=props */

const addTocart = () => {
  alert("This item added to cart")
 }


  return (
    <Card style={{ width: '18rem',marginTop:"4rem" }} className='productCard' >
      <Card.Img variant="top" src={require(`./img/${image}`)} />
      <Card.Body className='text-center d-flex flex-column justify-content-between '>
        <Card.Title>{title} </Card.Title>
        <Card.Subtitle>{desc} </Card.Subtitle>
        <Card.Text className='fs-3 fw-bold mt-2'>
        {price} ₺
        </Card.Text>
        <Button variant="success" onClick={addTocart}  >Buy Me Please.. </Button>
      </Card.Body>
    </Card>
  )
}

export default Product