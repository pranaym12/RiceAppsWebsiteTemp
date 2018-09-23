import React, { Component } from 'react';
import { Grid, Container, Row, Column, Icon, Image, Statistic } from 'semantic-ui-react';
import './common.css';

export default class Stats extends Component{
  render() {
    return(
      <div className="StatPageWrapper">
      <Statistic.Group widths='three'>
    <Statistic size='small'>
      <Statistic.Value><Icon name='code' size='large'/></Statistic.Value>
      <br/>
      <Statistic.Value size='tiny'>6</Statistic.Value>
      <Statistic.Label>Projects</Statistic.Label>
    </Statistic>

    <Statistic size='small'>
      <Statistic.Value><Icon name='laptop' size='large'/></Statistic.Value>
      <br/>
      <Statistic.Value>50</Statistic.Value>
      <Statistic.Label>Developers</Statistic.Label>
    </Statistic>

    <Statistic size='small'>
      <Statistic.Value><Icon name='user' size='large' /></Statistic.Value>
      <br/>
      <Statistic.Value>4000+</Statistic.Value>
      <Statistic.Label>Users</Statistic.Label>
    </Statistic>
    </Statistic.Group>
    </div>
    )
  }
}
