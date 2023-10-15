import React from 'react'

const Liste = ({people}) => {
  return (
    <div>
        {
            people.map((person)=>{

                const {id,name,image,age}=person
             return <article key={id} className='person'>
                <img src={image} alt="image" />
                <div>
                    <h4>{name}</h4>
                    <p>{age}</p>
                </div>




             </article>


            })
        }
    </div>
  )
}

export default Liste