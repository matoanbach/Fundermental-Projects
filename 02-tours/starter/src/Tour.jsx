import React, { useState} from "react";

function Tour({ id, image, name, info, price, removeTour }) {
  const [isShow, setIsShow] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {isShow ? info : `${info.substring(0, 200)}...`}
          <button
            className="info-btn"
            onClick={() => {
              setIsShow(!isShow);
            }}
          >
            {isShow ? "Read Less" : "Read More"}
          </button>
        </p>
        <button
          className="delete-btn btn-block btn"
          onClick={() => removeTour(id)}
        >
          Not interested
        </button>
      </div>
    </article>
  );
}

export default Tour;
