import React, { Component } from 'react';
import LandingPage from './Pages/LandingPage.js';
import AboutUs from './Pages/AboutUs.js';
import Stats from './Pages/Stats.js';
import TechPage from './Pages/TechPage.js';
import Projects1 from './Pages/Projects1.js';
import Projects2 from './Pages/Projects2.js';
import Customer from './Pages/Customer.js';
import Footer from './Pages/Footer.js';
import Testimonials from './Pages/Testimonials.js'
import WorkForUs from './Pages/WorkForUs.js';
import JoinUs from './Pages/JoinUs.js';
import WhitePage from './Pages/WhitePage.js'
import { ParallaxProvider } from 'react-scroll-parallax';

class App extends Component {
  render() {
    return (
  <ParallaxProvider class = "parallax">
  <div class = "body">
    <LandingPage/>
    <AboutUs/>
    <WhitePage/>
    <Projects1/>
    <WhitePage/>
    <Testimonials/>
    <WhitePage/>
    <JoinUs/>
    <WhitePage/>
    <WorkForUs/>

  </div>
  </ParallaxProvider>
    );
  }
}

export default App;
