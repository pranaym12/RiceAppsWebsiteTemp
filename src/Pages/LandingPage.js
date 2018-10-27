import React, { Component } from 'react';
import { Grid, Menu, Container, Row, Column } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './LandingPage.css';
import './hamburgers.css';
import { Parallax } from 'react-scroll-parallax';

export default class LandingPage extends Component {
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

        /*<Grid id="grid" centered columns={3} >

        <Grid.Row columns = {1} verticalAlign="middle" >
          <Grid.Column textAlign="center" style={{marginTop: "30vh"}} id="riceAppsText" >
          <div class="whiteText">
              <span class="lightBlue">R</span>ice<span class="lightBlue">A</span>pps
          </div>

          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns = {3} >
          <Grid.Column width = {6.5} textAlign="right" fluid vertical>
            <hr/>
          </Grid.Column>
          <Grid.Column width = {3} textAlign="center" id="weDoThingsText">
            <div class="whiteText">
              We do things
            </div>
          </Grid.Column>
          <Grid.Column width = {6.5}>

          </Grid.Column>
        </Grid.Row>

      </Grid>*/

    )
  }
}
