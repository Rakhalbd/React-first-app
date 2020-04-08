import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm Rakhal here. React App has been created. </h1>
        <p>This is really working!!</p>
        <Person name="Max" age="39"></Person>
        <Person name="Babul" age="56"></Person>
        <Person name="Majnu" age="23">
          My hobbies: Racing!
        </Person>
        <Person name="Moksed" age="31"></Person>
      </div>
    );
  } 
}

export default App;
