import React from "react";
import fruits from "./fruits";

const Products = () => {
const listFruits=  fruits.map((urun, index) => (
    <li key={index} style={{ color: urun.isFruit ? "red" : "green" }}>
      {urun.title}
    </li>
  ));

  return <ol>{listFruits}</ol>;
};

export default Products;
