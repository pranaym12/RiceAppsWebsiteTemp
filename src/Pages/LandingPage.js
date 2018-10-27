import React, { Component } from 'react';
import { Grid, Menu, Container, Row, Column } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './LandingPage.css';
import './hamburgers.css';
import { Parallax } from 'react-scroll-parallax';

export default class LandingPage extends Component {


  render() {

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
    return(
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
    
    return(
      <div>  
        <div class = "content">
        <Parallax offsetXMax={5} offsetXMin={-5}>
          <div id = "riceAppsText">
              <span class="lightBlue">R</span>ice<span class="lightBlue">A</span>pps
          </div>
        </Parallax>
        <Parallax offsetXMax={-20} offsetXMin={20}>
          <div id="whiteText">
          <hr/>
          <p id = "weDoThingsText">We do things.</p>
          </div>
        </Parallax>
        </div>
      </div>
    )
  }
}
