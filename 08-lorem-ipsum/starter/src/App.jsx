import { useEffect, useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [texts, setTexts] = useState([]);
  const [count, setCount] = useState(1);

  function handleSubmit(event) {
    const newArray = data.slice(0, count);

    setTexts(() =>
      newArray.map((text) => {
        return { id: nanoid(), text };
      })
    );

    event.preventDefault();
  }

  return (
    <section className="section-center">
      <h4>text generator based on local data</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          min="1"
          max="8"
          value={count}
          onChange={(event) => setCount(event.target.value)}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      <article className="lorem-text">
        {texts.map((item) => {
          const { id, text } = item;
          return <p key={id}>{text}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
