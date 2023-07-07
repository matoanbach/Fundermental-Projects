import React from "react";

function SingleItem({ id, name, completed, editItem, removeItem }) {
  return (
    <div className="single-item">
      <input type="checkbox" checked={completed} onChange={() => editItem(id)} />
      <p style={{textTransform: "capitalize", textDecoration: completed && "line-through"}}>{name}</p>

      <button className="btn remove-btn" type="button" onClick={() => removeItem(id)}>
        Delete
      </button>
    </div>
  );
}

export default SingleItem;
