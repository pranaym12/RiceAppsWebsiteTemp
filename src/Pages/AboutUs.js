import React, { Component } from 'react';
import './common.css';
import './AboutUs.css';
import { Parallax } from 'react-scroll-parallax';

export default class AboutUs extends Component {
    render() {
        return (
            <div className="AboutPageWrapper">
                <div className="outside">
                    <div className="vert-line"></div>
                    <p id="big-p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p id="learn-more">
                        <a href="https://www.google.com/"><u>Here's our mission.</u></a>
                    </p>
                </div>
            </div>
        )
    }
}
