import React from 'react'


const Kisi = ({student}) => {
   const {isim,yas,kurs,img}=student; 
  return (
    <div className='kisi'>
        <h1>{isim}</h1>
        <img src={img} alt="resim" width="200" height="200" />
        <h2>{yas}</h2>
        <h3>{kurs}</h3>
    </div>
  )
}

export default Kisi





/*


const Kisi = ({student}) => {
     const {isim,yas,kurs,img}=student; 
return (
    <div className='kisi'>
        <h1>{student.isim}</h1>
        <img src={student.img} alt="resim" width="200" height="200" />
        <h2>{student.yas}</h2>
        <h3>{student.kurs}</h3>


   
    </div>
  )
}

export default Kisi



*/



