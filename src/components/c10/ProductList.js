import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import data from "../../assets/data/products.json"
import Product from './Product'
import "./productCart.scss"

const ProductList = () => {
  return (
   <Container className='g-4 mt-5'>
    <Row>
      {

data.map((product)=><Col key={product.id} md={6} lg={4} xl={3} >
  <Product {...product}  />

</Col>)


      }

    </Row>
   </Container>

  )
}

export default ProductList