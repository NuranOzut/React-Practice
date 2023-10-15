import React from 'react'
import { Button } from 'react-bootstrap'

const Country = ({name,flags,capital,population,index,removeByCcn3,ccn3}) => {
  return (
    <tr>
        <td>{index+1}</td>
        <td><img src= {flags.png} className='img-fluid' width="100"  alt="" /></td>
        <td>{name.official}</td>
        <td>{population}</td>
        <td>{capital}</td>
        <td><Button variant="danger" onClick={()=>removeByCcn3(ccn3)}>Delete</Button></td>
    </tr>
  )
}

export default Country