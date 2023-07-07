import { useEffect, useState } from "react";
import { shortList, list, longList } from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Carousel() {
  const [people, setPeople] = useState(longList);
  const [currentPerson, setCurrentPerson] = useState(0);

  function prevPerson() {
    // console.log(
    //   currentPerson,
    //   currentPerson - 1 + people.length,
    //   (currentPerson - 1 + people.length) % people.length
    // );
    setCurrentPerson((currentPerson - 1 + people.length) % people.length);
  }

  function nextPerson() {
    // console.log(
    //   currentPerson,
    //   currentPerson + 1,
    //   (currentPerson + 1) % people.length
    // );
    setCurrentPerson((currentPerson + 1) % people.length);
  }

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextPerson();
    }, [2000]);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, name, image, title, quote } = person;
        return (
          <article
            className="slide"
            key={id}
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? "visible" : "hidden",
            }}
          >
            {/* 
            personIndex   currentPerson (1)
            0             -100
            1             0
            2             100
            3             200
            4             300
            5             400
            6             500
            7             600
             */}
            {/* 
             
             */}
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={() => prevPerson()}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={() => nextPerson()}>
        <FiChevronRight />
      </button>
    </section>
  );
}

export default Carousel;
