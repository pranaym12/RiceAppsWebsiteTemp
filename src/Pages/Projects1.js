import React, { Component } from 'react';
import { Grid, Container, Row, Column } from 'semantic-ui-react';
import './common.css';
import './Projects1.css';

export default class Projects1 extends Component{
  render() {
    return(
      <div className="ProjectPageWrapper">
        <div className="title">
          <h1> What we've worked on </h1>
          <hr/>
        </div>
        <div className="projectSection">
          <div className="emptySpace"></div>
          <div className="emptySpace"></div>
        </div>

      </div>
    )
  }
}
