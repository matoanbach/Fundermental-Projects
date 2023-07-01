// In the Form component, set up a color state value and a form with an two input fields (color and text).
// Set up a handleChange function to update the color state value and a handleSubmit function to add the color to the list.

import { useState } from "react";

function Form({addColor}) {
  const [color, setColor] = useState("");
  function handleSubmit(event) {
    addColor(color);
    event.preventDefault();
  }
  return (
    <section className="container">
      <h4>color generator</h4>
      <form onSubmit={handleSubmit} className="color-form">
        <input
          type="color"
          value={color}
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />
        <input
          type="text"
          value={color}
          onChange={(event) => {
            setColor(event.target.value);
          }}
          placeholder="#f15025"
        />
        <button className="btn" type="submit" style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
}

export default Form;
