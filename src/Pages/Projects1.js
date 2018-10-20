import React, { Component } from 'react';
import './common.css';
import './Projects1.css';
import { Parallax } from 'react-scroll-parallax';

export default class Projects1 extends Component{
  render() {
    return(
      <div className="ProjectPageWrapper">
      <Parallax offsetXMax={5} offsetXMin={-20}>
        <div className="projectstitle">
          <h1> We've delivered </h1>
          <hr/>
        </div>
        </Parallax>
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
