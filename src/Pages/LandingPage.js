import React, { Component } from 'react';
import { Grid, Menu, Container, Row, Column } from 'semantic-ui-react';
import './common.css';
import 'semantic-ui-css/semantic.min.css';
import './LandingPage.css';
import './hamburgers.css';

export default class LandingPage extends Component { 
  constructor(props) {
    super(props);
    this.state = {
        clicked: false

    };
  }
  handleClick() {
    this.setState({clicked: !this.state.clicked})
  }
  render() {
     
    var button_classes
    if(this.state.clicked==true) {
      button_classes = "hamburger hamburger--collapse is-active"
    }
    else{
      button_classes = "hamburger hamburger--collapse "
    }
    return(

      <div class = "content">
        <button onClick={()=>this.handleClick()} class={button_classes} type="button">   
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>

        <div id = "riceAppsText">
            <span class="lightBlue">R</span>ice<span class="lightBlue">A</span>pps
        </div>
        <div id="whiteText">
        <hr/>

        <p id = "weDoThingsText">We do things.</p>
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
