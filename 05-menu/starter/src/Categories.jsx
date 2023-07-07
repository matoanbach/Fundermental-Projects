import React from "react";

function Categories({ categories, toggleCategory }) {

  return (
    <div className="btn-container">
      {
        categories.map((category) =>{
          return <button key={category} type="button" className="btn" onClick={() => toggleCategory(category)}>
            {category}
          </button>
        })
      }
    </div>
  );
}

export default Categories;
