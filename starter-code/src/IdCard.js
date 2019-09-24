import React from "react";

const IdCard = props => {

  

  const {lastName, firstName, gender, height, birth, picture} = props;

  return (
    <div>
      <img src={picture} />
      <div>
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth: {birth}</p>
      </div>
    </div>
  )
}

export default IdCard;