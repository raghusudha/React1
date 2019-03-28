import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloMsg from './HelloMsg';
import Timer from './Timer';
import TodoApp from './TodoApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <HelloMsg name="Sudha"/>
      <HelloMsg email="Sudha@gmail.com"/> */}
      {/* <Timer/> */}
      <TodoApp/>
      </div>
    );
  }
}

export default App;
