import React, { Component } from 'react';
import { Grid, Container, Row, Column } from 'semantic-ui-react';
import './common.css';

export default class Stats extends Component{
  render() {
    return(
      <div className="ProjectPageWrapper">
      <Grid relaxed columns="equal">
      <Grid.Row>
    <Grid.Column>
      <Container textAlign="center">1</Container>
    </Grid.Column>
    <Grid.Column>
      <Container textAlign="center">2</Container>
    </Grid.Column>
    <Grid.Column>
      <Container textAlign="center">2</Container>
    </Grid.Column>
    </Grid.Row>
    <Grid.Row>
    <Grid.Column>
      <Container textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Container>
    </Grid.Column>
    <Grid.Column>
      <Container textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Container>
    </Grid.Column>
    <Grid.Column>
      <Container textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Container>
    </Grid.Column>
    </Grid.Row>
    <Grid.Row>
    <Grid.Column>
      <Container textAlign="center">1</Container>
    </Grid.Column>
    <Grid.Column>
      <Container textAlign="center">2</Container>
    </Grid.Column>
    <Grid.Column>
      <Container textAlign="center">3</Container>
    </Grid.Column>
    </Grid.Row>
  </Grid>
      </div>
    )
  }
}
