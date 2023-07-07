import { useState } from "react";
import data from "./data";
import Menu from "./Menu";
import Title from "./Title";
import Categories from "./Categories";

const App = () => {
  const [items, setItems] = useState(data);
  const [activeCategory, setActiveCategory] = useState("all");
  console.log(activeCategory);
  function toggleCategory(category) {
    setActiveCategory(category);
  }
  const tempArray = new Set();
  tempArray.add("all");
  items.map((item) => {
    tempArray.add(item.category);
  });

  const categories = Array.from(tempArray);

  return (
    <main>
      <section className="menu">
        <Title />
        <Categories categories={categories} toggleCategory={toggleCategory} />
        <Menu items={items} activeCategory={activeCategory} />
      </section>
    </main>
  );
};
export default App;
