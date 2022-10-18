import React from 'react';
import './App.css';
import ClassComponent from './components/ClassComponents';
import FunctionalComponent from './FunctionalComponent';
import { useState } from "react"

function App() {
  const company = "Devtown"

  const [name, setName] = useState("Shuja");


  return (
    <div className="App">
      <h1>Class Component</h1>
      <ClassComponent></ClassComponent>
      <br />
      <h1>Functional Component</h1>
      <FunctionalComponent name={name} age={23} company={company} setName={setName} />

    </div>
  );
}

export default App;
