import React from "react";
import MenuItem from "./MenuItem";

function Menu({ items, activeCategory }) {
  if (activeCategory !== "all") {
    items = items.filter((item) => {
      return item.category === activeCategory;
    });
  }

  return (
    <div className="section-center">
      {items.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...menuItem} />;
      })}
    </div>
  );
}

export default Menu;
