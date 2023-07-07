import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
function Form({ addItem }) {
  const [text, setText] = useState("");
  function handleSubmit(event) {
    addItem({
      name: text,
      id: nanoid(),
      completed: false,
    });
    setText("");
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
