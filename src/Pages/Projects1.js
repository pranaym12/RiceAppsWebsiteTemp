import React, { Component } from 'react';
import './common.css';
import './Projects1.css';
import Slide from 'react-reveal/Slide';

export default class Projects1 extends Component{
  render() {
    return(
      <div className="ProjectPageWrapper">
      <Slide left>
        <div className="projectstitle">
          <h1> We've delivered </h1>
          <hr/>
        </div>
        </Slide>
        <div className="projectSection">
          <div className="emptySpace"></div>
          <div className="emptySpace"></div>
          <div className="emptySpace"></div>
          <div className="emptySpace"></div>
        </div>

      </div>
    )
  }
}
