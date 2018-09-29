import React, { Component } from 'react';
import './common.css';
import './AboutUs.css';

export default class AboutUs extends Component {
    render() {
        return (
            <div className="AboutPageWrapper">
                <div className="outside">
                    <div class="vert-line"></div>
                    <p id="big-p">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p id="ins-p">
                        This is what we stand for.
                    </p>
                    <p id="learn-more">
                        <a href="https://www.google.com/"><u>Learn more about us.</u></a>
                    </p>
                </div>
            </div>
        )
    }
}
