import React, { Component } from 'react';
import './common.css';
import './JoinUs.css';
import Slide from 'react-reveal/Slide';

export default class JoinUs extends Component {
    render() {
        return (
            <div className="JoinUsPageWrapper">
            <Slide left>
              <div className="jointitle">
                <h1> Do you have what it takes? </h1>
                <hr/>
              </div>
            </Slide>
              <div className="text">
                <Slide right><h1> Join us. </h1></Slide>
                <Slide right><div> We’re looking for dedicated, passionate, and creative team members. </div></Slide>
                <Slide right><div> Fill out this form, and we’ll be in touch with interview times and further details. </div></Slide>
                <Slide right><div> Good luck! </div></Slide>
              </div>
            </div>
        )
    }
}
