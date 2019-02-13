import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/Authentication/Login';
import Register from "./Components/Authentication/Register";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Register />
      </div>
    );
  }
}

export default App;
