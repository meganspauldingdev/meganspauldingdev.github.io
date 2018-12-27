import React, { Component } from 'react';
import './App.css';
import MainNav from './components/MainNav.js'
import Hero from './components/Hero.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav />
        <Hero />
      </div>
    );
  }
}

export default App;
