import React, { useState } from "react";
import data from "./data";
/* import "./text.css"; */

const Paragraph = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleGenerate = (e) => {
    e.preventDefault();
    let amount = count;

    if (count <= 0) {
      amount = 1;
    }
    if (amount > data.length) {
      amount = data.length;
    }
    setText(data.slice(0,amount))
  };


  const handleCleare = () => {
      setCount(0)
      setText([])
  }


  return (
    <section className="section-center">
      <h3>HOW MANY PARAGRAPHS</h3>
      <form>
        <label htmlFor="text">Paragraphs</label>
        <input
          type="number"
          id="text"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" onClick={handleGenerate}>
          Generate
        </button>
        <button className="btn" onClick={handleCleare}>
          Clear
        </button>
      </form>
      <div className="lorem-text">
        {

            text.map((item,index)=><p key={index}>{item}</p>)
        }
      </div>



    </section>
  );
};

export default Paragraph;
