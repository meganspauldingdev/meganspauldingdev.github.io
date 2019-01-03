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
import Footer from './components/Footer.js'
import { Route } from 'react-router-dom'
import AboutPage from './pages/AboutPage.js'
import PortfolioPage from './pages/PortfolioPage.js'
import ServicesPage from './pages/ServicesPage.js'
import ContactPage from './pages/ContactPage.js'


class App extends Component {

  render() {
    var portfolioSamples = PortfolioData.samples;
    var portfolioCount = 6;

    let showingSamples = portfolioSamples.slice(0, portfolioCount);


    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <div>
          <TriangleBackground />
          <MainNav />
          <Hero />
          <Biography />
          <Services />
          <Portfolio sectionTitle="RECENT WORK" showingSamples={ showingSamples }/>
          <About />
          <Footer />
          </div>
        )}/>

        <Route path='/about' render={() => (
          <AboutPage />
        )}/>

        <Route path='/portfolio' render={() => (
          <PortfolioPage />
        )}/>

        <Route path='/services' render={() => (
          <ServicesPage />
        )}/>

        <Route path='/contact' render={() => (
          <ContactPage />
        )}/>

      </div>
    );
  }
}

export default App;
