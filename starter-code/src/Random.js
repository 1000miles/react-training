import React, { Component } from "react";

const Random = (props) => {

  const {min, max} = props;

  // console.log(props);

  let random = Math.floor(Math.random() * (max - min + 1) + min);

  return (
    <div>
      <p>Random value between {min} and {max} => { random }</p>
    </div>
  );
}

export default Random;
