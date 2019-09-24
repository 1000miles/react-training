import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './IdCard';
import IdCard from './IdCard';
import Greetings from './Greetings';
import Random from './Random';

class App extends Component {
  render() {
    return (
      <div className="App">
        <IdCard
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          // Fix: Change date object to string
          birth={new Date("1992-07-14").toString()}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName='Delores '
          firstName='Obrien'
          gender='female'
          height={172}
          birth={new Date("1988-05-11").toString()}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <Random min={1} max={6}/>
        <Random min={1} max={100}/>
      </div>
    );
  }
}

export default App;
