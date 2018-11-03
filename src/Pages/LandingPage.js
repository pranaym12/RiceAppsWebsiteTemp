import React, { Component } from 'react';
import './LandingPage.css';
import './hamburgers.css';
import Slide from 'react-reveal/Slide';

export default class LandingPage extends Component {


  render() {

    
    return(
      <div>  
        <div class = "content">
        <Slide left>
          <div id = "riceAppsText">
              <span class="lightBlue">R</span>ice<span class="lightBlue">A</span>pps
          </div>
        </Slide>
        <Slide right>
          <div id="whiteText">
          <hr/>
          <p id = "weDoThingsText">We do things.</p>
          </div>
        </Slide>
        </div>
      </div>
    )
  }
}
