import React from 'react'

function Person({id, name, age, image}) {
    console.log(id, name, age, image);
  return (
    <article className="person">
        <img src={image} alt={name} className="img"/>
        <div>
            <h4>{name}</h4>
            <p>{age} years</p>
        </div>
    </article>
  )
}

export default Person