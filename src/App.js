import React, { Component } from 'react';
import './App.css';
import MainNav from './components/MainNav.js'
import Hero from './components/Hero.js'
import Biography from './components/Biography.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav />
        <Hero />
        <Biography />
      </div>
    );
  }
}

export default App;
