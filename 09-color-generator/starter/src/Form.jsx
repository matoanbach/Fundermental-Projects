import React, { useState } from "react";

function Form({ toggleColor }) {
  const [textColor, setTextColor] = useState("");
  function handleChange(event) {
    toggleColor(textColor);
    event.preventDefault();
  }
  return (
    <section className="container">
        <h4>color generator</h4>
      <form onSubmit={handleChange} className="color-form">
        <input
          type="color"
          value={textColor}
          onChange={(event) => setTextColor(event.target.value)}
        />
        <input
          type="text"
          value={textColor}
          onChange={(event) => setTextColor(event.target.value)}
        />
        <button className="btn" type="submit" style={{ background: `${textColor}` }}>Submit</button>
      </form>
    </section>
  );
}

export default Form;
