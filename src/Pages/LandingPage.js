import React, { Component } from 'react';
import { Grid, Menu, Container, Row, Column } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './LandingPage.css';
import './hamburgers.css';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';


export default class LandingPage extends Component {


  render() {

    
    return(
      <div>  
        <div class = "content">
          <div id = "riceAppsText">
              <span class="lightBlue">R</span>ice<span class="lightBlue">A</span>pps
          </div>
          <div id="whiteText">
          <hr/>

          <p id = "weDoThingsText">We do things.</p>
          </div>
        </div>
      </div>
    )
  }
}
