import React, { Component } from 'react';
import LandingPage from './Pages/LandingPage.js';
import AboutUs from './Pages/AboutUs.js';
import Stats from './Pages/Stats.js';
import TechPage from './Pages/TechPage.js';
import Projects1 from './Pages/Projects1.js';
import Projects2 from './Pages/Projects2.js';
import Customer from './Pages/Customer.js';
import Footer from './Pages/Footer.js';
import 'semantic-ui-css/semantic.min.css';


class App extends Component {
  render() {
    return (
  <div>
  <LandingPage/>
  <AboutUs/>
  <Stats/>
  <TechPage/>
  <Projects1/>
  <Projects2/>
  <Customer/>
  <Footer/>
  </div>
    );
  }
}

export default App;
