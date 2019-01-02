import React, { Component } from 'react';
import './App.css';
import MainNav from './components/MainNav.js'
import Hero from './components/Hero.js'
import Biography from './components/Biography.js'
import Services from './components/Services.js'
import Portfolio from './components/Portfolio.js'
import PortfolioData from './utils/PortfolioData.json';
import TriangleBackground from './components/TriangleBackground.js'
import About from './components/About.js'


class App extends Component {
  state = {
    portfolioCount: 6
  }

  render() {
    var portfolioSamples = PortfolioData.samples;
    var portfolioCount = 6;

    let showingSamples = portfolioSamples.slice(0, portfolioCount);


    return (
      <div className="App">
        <TriangleBackground />
        <MainNav />
        <Hero />
        <Biography />
        <Services />
        <Portfolio sectionTitle="RECENT WORK" showingSamples={ showingSamples }/>
        <About />
      </div>
    );
  }
}

export default App;
