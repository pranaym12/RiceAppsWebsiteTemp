import React, { Component } from 'react';
import './common.css';
import './Testimonials.css';
import { Parallax } from 'react-scroll-parallax';

export default class Testimonials extends Component {
    render() {
        return (
            <div className="TestimonialsWrapper">
                <div className="outside-testimonials">

                <Parallax offsetXMax={-5} offsetXMin={20}>

                    <div id="testament">
                      <p id = "quot1">
                        “
                      </p>
                      <p id = "testText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                      <p id = "quot2">
                        ”
                        </p>
                    </div>
                    <div id = "line1">
                      <hr/>
                    </div>
                    </Parallax>
                    <div id="testimonial-title">
                        <p id = "titleText">
                          What people say about us
                        </p>
                    </div>

                </div>
            </div>
        )
    }
}
