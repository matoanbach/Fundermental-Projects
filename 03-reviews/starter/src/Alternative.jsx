import { useEffect, useState } from "react";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";

import people from "./data";

const App = () => {
  const [index, setIndex] = useState(0);

  const { id, name, job, image, text } = people[index];

  function setPrevious() {
    setIndex((index) => {
      if (index === 0) {
        index = people.length;
      }

      let newNumber =  (index - 1) % people.length;
      return newNumber;
    });
  }

  function setNext() {
    setIndex((index) => {
      return (index + 1) % people.length;
    });
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    setIndex(randomNumber % people.length);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        <div className="btn-container">
          <button className="prev-btn" onClick={() => setPrevious()}>
            <AiFillLeftCircle />
          </button>
          <button className="next-btn" onClick={() => setNext()}>
            <AiFillRightCircle />
          </button>
        </div>
        <button
          className="btn btn-hipster"
          onClick={() => {
            randomPerson();
          }}
        >
          surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
