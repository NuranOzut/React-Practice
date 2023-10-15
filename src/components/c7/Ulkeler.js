import React from "react";
import data from "../../assets/data/countries.json";

const Ulkeler = () => {
  //! verilen datadan ulkelri secip selecte yerlestir
  //! a harfi ile baslayan ulkeleri sirala

  const styleTable={
    textAlign:"center",
    backgroundColor:"cyan",
    fontSize:"1.6rem",
    fontWeight:"800"
  }

  return (
    <div>
      <select defaultValue="ulke">
        <option disabled value="ulke">
          Bir ulke seciniz{" "}
        </option>
        {data.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
      <table style={{width:"500px"}}> 
        <thead style={{backgroundColor:"gold",fontSize:"2rem",}}>
          <tr>
            <th>Sira No</th>
            <th>Ulke Adi</th>
            <th>Ulke Codu</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((ulke) => ulke.name.startsWith("B"))
            .map((item, index) => (
              <tr key={index} style={index%2!==0 ? styleTable: {...styleTable,backgroundColor:"crimson"} } >
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.code}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ulkeler;
