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
import { ParallaxProvider } from 'react-scroll-parallax';
import './App.css';
import ScrollIntoView from 'react-scroll-into-view';


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
    //call this function when the hamburger menu is clicked
    //if the menu is open, close it
    //if it's closed, open it
    this.setState({ clicked: !this.state.clicked })
  }
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  closeSidebar(){
    //Call this function whenever user clicks outside of the sidebar menu
    if(this.state.clicked ){
      //But only sets clicked to False when clicked is True
      this.setState({ clicked: false })
    }
  }
  
  //end of sidebar-menu

  render() {
    //start sidebar-menu
    //if statemenets to display and hide sidebar-menu
    var button_classes
    var sidebar_menu_classes
    var menu_div_class

    if (this.state.clicked == true) {
      button_classes = "hamburger hamburger--collapse is-active"
      sidebar_menu_classes = "sidebar sidebarUnhidden"
      menu_div_class = "blueMenu"
    }
    else {
      button_classes = "hamburger hamburger--collapse "
      sidebar_menu_classes = "sidebar sidebarHidden"
      menu_div_class = ""
    }
    const menuLinkStyle = {
      color: '#002FA4',
      marginTop: '4vh'
    }
    //end of sidebar-menu
    return (
      <ParallaxProvider>
        <div >
          <div id="menuWrapper" class={menu_div_class}>
            <button onClick={() => this.handleClick()}
              id="hamburger" class={button_classes} type="button">
              <span class="hamburger-box">
                <span class="hamburger-inner"></span>
              </span>
            </button>

            <div id="sidebar" class={sidebar_menu_classes}>
              <ScrollIntoView selector="#home">
                <div class="sidebar-text">Home</div>
              </ScrollIntoView>
              <ScrollIntoView selector="#mission">

                <div class="sidebar-text">Our Mission</div>
              </ScrollIntoView>
              <ScrollIntoView selector="#projects">
                <div class="sidebar-text">Our Projects</div>
              </ScrollIntoView>
              <ScrollIntoView selector="#join">
                <div class="sidebar-text">Join Us</div>
              </ScrollIntoView>
              <ScrollIntoView selector="#contact">
                <div class="sidebar-text">Contact Us</div>
              </ScrollIntoView>

            </div>
          </div>
        </div>
        <div onClick={()=>this.closeSidebar()}>
          <div id="home">
            <LandingPage />
          </div>
          <div id="mission">
            <AboutUs />
          </div>

          <WhitePage />
          <div id="projects">
            <Projects1 />
          </div>
          <WhitePage />
          <Testimonials />
          <WhitePage />
          <div id="join">
            <JoinUs />
          </div>
          <WhitePage />
          <div id="contact">
            <WorkForUs />
          </div>

        </div>
      </ParallaxProvider>
    </div>
    );
  }
}

export default App;
