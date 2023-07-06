import { useEffect, useState } from "react";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import { FaQuoteRight } from "react-icons/fa";

import people from "./data";

const App = () => {
  const [index, setIndex] = useState(0);

  const { id, name, job, image, text } = people[index];

  function checkNumber(number) {
    if (number < 0) {
      return people.length - 1;
    } else if (number > people.length - 1) {
      return 0;
    } else {
      return number;
    }
  }

  function setPrevious() {
    setIndex((index) => {
      return checkNumber(index - 1);
    });
  }

  function setNext() {
    setIndex((index) => {
      return checkNumber(index + 1);
    });
  }

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    setIndex(checkNumber(randomNumber));
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
        <button className="btn btn-hipster" onClick={() => {randomPerson()}}>surprise me</button>
      </article>
    </main>
  );
};
export default App;
