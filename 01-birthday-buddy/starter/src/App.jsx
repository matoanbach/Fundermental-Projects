import { useState } from "react";
import data from "./data";
import Person from "./Person";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        {people.map((person) => {
          return <Person key={person.id} {...person} />;
        })}
        <button
          className="btn btn-block"
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
