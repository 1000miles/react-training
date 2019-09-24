import React from 'react';
// import IdCard from './IdCard';

const Greetings = props => {
 console.log(props)
  const getsKeys =(data)=> {
    const text ={
      de:"Hallo",
      fr:"Bonjour"
    }
    for(let key in text){
      if(data.lang === key)
      return text[key]
    }
  };

  return (
    <div>
    <p> {getsKeys(props)} {props.children}</p>
    </div>
  )
};

export default Greetings;