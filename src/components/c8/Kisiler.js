import React from 'react'
import data from "../../assets/data/students.json"
import Kisi from './Kisi'
import "./kisi.scss"

const Kisiler = () => {
  return (
    <div className="kisiler">
        {
            data.map((student,index)=><Kisi key={index} student={student}  />)
        }

    </div>
  )
}

export default Kisiler