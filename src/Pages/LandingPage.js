import React, { Component } from 'react';
import { Grid, Menu, Container, Row, Column } from 'semantic-ui-react';
import './common.css';
import 'semantic-ui-css/semantic.min.css';
import './LandingPage.css';

export default class LandingPage extends Component{
  render() {
    return(
      
        <Grid id="grid" verticalAlign='middle' centered columns={3}>
        
        <Grid.Row columns = {1}>
          <Grid.Column textAlign="center" id="riceAppsText" class="landingText">
            
              Rice Apps
            
            
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns = {3} >
          <Grid.Column width = {6.5} textAlign="right">
            <hr/>
          </Grid.Column>
          <Grid.Column width = {3} textAlign="center" id="weDoThingsText">
              We do things      
          </Grid.Column>
          <Grid.Column width = {6.5}>
            Empty column
          </Grid.Column>
        </Grid.Row>
      
      </Grid>
      
    )
  }
}
