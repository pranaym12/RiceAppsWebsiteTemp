import React, { Component } from 'react';
import './common.css';
import './JoinUs.css';

export default class JoinUs extends Component {
    render() {
        return (
            <div className="JoinUsPageWrapper">
              <div className="jointitle">
                <h1> Do you have what it takes? </h1>
                <hr/>
              </div>
              <div className="text">
                <h1> Join us. </h1>
                  <div> We’re looking for dedicated, passionate, and creative team members. </div>
                  <div> Fill out this form, and we’ll be in touch with interview times and further details. </div>
                  <div> Good luck! </div>
              </div>
            </div>
        )
    }
}
