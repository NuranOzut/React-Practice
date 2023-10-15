import React from "react";
import student from "../../assets/data/students.json";

const Tablo = () => {

    const style1={
        backgroundColor:"cyan",
        color:"purple",
        fontWeight:"bold",
        textAlign:"center"
    }

  return (
    <div>
      <table style={{width:"500px",margin:"3rem auto"}} >
        <thead style={{backgroundColor:"blue",color:"crimson"}}>
          <tr>
            <th>Isim</th>
            <th>Yas</th>
            <th>Kurs</th>
          </tr>
        </thead>
        <tbody>
          {student.map((ogrenci, index) => (
            <tr key={index} style={index%2===0 ? style1 : {...style1,backgroundColor:"bisque"}} >
              <td>{ogrenci.isim}</td>
              <td>{ogrenci.yas}</td>
              <td>{ogrenci.kurs}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tablo;
