import React, { Component } from 'react';
import LandingPage from './Pages/LandingPage.js';
import AboutUs from './Pages/AboutUs.js';
//import Stats from './Pages/Stats.js';
//import TechPage from './Pages/TechPage.js';
import Projects1 from './Pages/Projects1.js';
//import Projects2 from './Pages/Projects2.js';
//import Customer from './Pages/Customer.js';
//import Footer from './Pages/Footer.js';
import Testimonials from './Pages/Testimonials.js'
import WorkForUs from './Pages/WorkForUs.js';
import JoinUs from './Pages/JoinUs.js';
import WhitePage from './Pages/WhitePage.js'
import 'semantic-ui-css/semantic.min.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css'

class App extends Component {
  //CONSTRUCTOR and functions to handle menu bar
  constructor(props) {
    super(props);
    this.state = {
        clicked: false,
        sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  handleClick() {
    this.setState({clicked: !this.state.clicked})
  }
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  //end of sidebar-menu

  render() {
    //if statemenets to display and hide sidebar-menu
    var button_classes
    var sidebar_menu_classes
    var menu_div_class
    if(this.state.clicked==true) {
      button_classes = "hamburger hamburger--collapse is-active"
      sidebar_menu_classes = "sidebar sidebarUnhidden"
      menu_div_class = "blueMenu"
    }
    else{
      button_classes = "hamburger hamburger--collapse "
      sidebar_menu_classes = "sidebar sidebarHidden"
      menu_div_class = ""
    }
    const menuLinkStyle = {
      color:'#002FA4',
      
      marginTop: '4vh'
    }
    //end of sidebar-menu
    return (
      <ParallaxProvider>

      <div>
        <div id="menuWrapper" class={menu_div_class}>
          <button onClick={()=>this.handleClick()}
              id="hamburger" class={button_classes} type="button">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>
              <div id="sidebar" class={sidebar_menu_classes}>
                <div class="sidebar-text">Home</div>
                <div class="sidebar-text">Our Mission</div>
                <div class="sidebar-text">Our Projects</div>
                <div class="sidebar-text">Join Us</div>
                <div class="sidebar-text">Contact sUs</div>
              </div>       
        </div>   
      </div>
      <div>
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
