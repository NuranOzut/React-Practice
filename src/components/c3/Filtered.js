import React from 'react'
import ogrenciler from "./students.json"

const Filtered = () => {


   
  //!listeye yasi 25den kucuk olanlarin isimlerini ekleyelim
  return (
    <div>

<ol>

    {
ogrenciler.filter((student)=>student.yas <25).map((item,index)=>
   <li key={index}> {item.isim}</li>
   )
    }

</ol>
    </div>
  )
}

export default Filtered