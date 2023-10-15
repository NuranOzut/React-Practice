import React, { useEffect, useState } from "react";
import data from "../../assets/data/data.json";
import { Container, Spinner, Table } from "react-bootstrap";
import Country from "./Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCountries(data);
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const removeByCcn3 = (ccn3) => {
    const isDelete = window.confirm(
      "Bu datayi silmek istediginize emin misiniz?"
    );

    if (isDelete) {
      let newArr = countries.filter((item) => item.ccn3 !== ccn3);
      setCountries(newArr);
    }
  };

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Bayrak</th>
            <th>Ulke</th>
            <th>Nufus</th>
            <th>Baskent</th>
            <th>Islem</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={loading ? "d-block" : "d-none" }>
              <Spinner animation="border" variant="success" />
            </td>
          </tr>

          {countries.map((item, index) => (
            <Country key={index}
             index={index}
              {...item}
               removeByCcn3={removeByCcn3}  />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Countries;
