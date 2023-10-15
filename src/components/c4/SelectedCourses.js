import React from 'react'
import data from "../../assets/data/students.json"

const SelectedCourses = () => {

      //!selectin icine kurslari tekrarsiz (bir defa kullanilacak) sekilde ekleyelim

  return (
    <div>

<select >
    {

        data.reduce((values,student)=>{
            if(!values.includes(student.kurs)) values.push(student.kurs);
            return values

        },[]).map((item,index)=>
        <option key={index}>{item}</option>
        )

    }


</select>







    </div>
  )
}

export default SelectedCourses