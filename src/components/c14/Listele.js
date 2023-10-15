import React, { useState } from 'react'
import data from "./data"
import Liste from './Liste'
import "./list.css"

const Listele = () => {

    const [people, setPeople] = useState(data)
    const [geriAl,setGeriAl]=useState(false)

    const bringBack = () => { 
        setPeople(data)
        setGeriAl(!geriAl)
    }
    const clearAll = () => {
        setPeople([])
        setGeriAl(!geriAl)

    }

  return (
    <main>
        <section className='container'>
            <h3>{people.length} Bugun Doganlar</h3>
            <Liste  people={people}  />
            {
              geriAl ? ( <button onClick={bringBack}>Bring Back</button>) :
               ( <button onClick={clearAll}>Clear All</button>)
            }
        </section>


    </main>
  )
}

export default Listele