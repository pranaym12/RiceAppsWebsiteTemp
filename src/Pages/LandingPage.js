import React, { Component } from 'react';
import { Grid, Menu, Container, Row, Column } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './LandingPage.css';
import './hamburgers.css';
import { Parallax } from 'react-scroll-parallax';

export default class LandingPage extends Component {


  render() {

    
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
