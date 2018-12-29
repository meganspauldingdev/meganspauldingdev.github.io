import React, { Component } from 'react';
import './App.css';
import MainNav from './components/MainNav.js'
import Hero from './components/Hero.js'
import Biography from './components/Biography.js'
import Services from './components/Services.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainNav />
        <Hero />
        <Biography />
        <Services />
      </div>
    );
  }
}

export default App;
