import React, { Component } from 'react';
import './common.css';
import './JoinUs.css';
import { Parallax } from 'react-scroll-parallax';

export default class JoinUs extends Component {
    render() {
        return (
            <div className="JoinUsPageWrapper">
            <Parallax offsetXMax={5} offsetXMin={-20}>
              <div className="jointitle">
                <h1> Do you have what it takes? </h1>
                <hr/>
              </div>
            </Parallax>
              <div className="text">
                <Parallax offsetXMax={0} offsetXMin={11}><h1> Join us. </h1></Parallax>
                <Parallax offsetXMax={-6} offsetXMin={16}><div> We’re looking for dedicated, passionate, and creative team members. </div></Parallax>
                <Parallax offsetXMax={-16} offsetXMin={17}><div> Fill out this form, and we’ll be in touch with interview times and further details. </div></Parallax>
                <Parallax offsetXMax={-28} offsetXMin={16}><div> Good luck! </div></Parallax>
              </div>
            </div>
        )
    }
}
