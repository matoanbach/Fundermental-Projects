import List from "./List";
import data from "./data";
import { useState } from "react";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people}/>
        {
          people.length === 0
          ? <button type="button" className="btn btn-block" onClick={() => {setPeople(data)}}>Reset list</button>
          : <button type="button" className="btn btn-block" onClick={() => {setPeople([])}}>Clear All</button>
        }
        
      </section>
      
    </main>
  );
};
export default App;
