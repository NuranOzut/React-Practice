import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { RingLoader } from 'react-spinners'
import CardBusiness from './CardBusiness'

const BusinessInfo = () => {
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {

        const getBusinessData =() => { 

        const timer=    setTimeout(()=>{
                 fetch("https://650d9fdda8b42265ec2c80a4.mockapi.io/products")
            .then((res)=>res.json())
            .then((data)=>{
                setdata(data)
                   console.log(data)
            })
            .catch((error)=>{
                console.log(error)
            })

            .finally(()=>{
                setloading(false)
            })


            },3000)

         

return(()=>{
    clearTimeout(timer)
})
         

         }


    
      return () => {
    getBusinessData()
      }
    }, [])
    

  return (
    <Container className='mt-5 text-center' >
        {
        loading && <RingLoader color="#36d7b7" />}
        <Row className='g-5'>
            {
                data.map((item)=><Col key={item.id} sm={6} md={4} lg={3} xl={2} >

                    <CardBusiness {...item} />
                
                </Col>)
            }
        </Row>
        



    </Container>
  )
}

export default BusinessInfo