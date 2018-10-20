import React, { Component } from 'react';
import './common.css';
import './Testimonials.css';

export default class Testimonials extends Component {
    render() {
        return (
            <div className="TestimonialsWrapper">
                <div className="outside-testimonials">
<<<<<<< HEAD
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
                    <div id="testimonial-title">
                        <p id = "titleText">
                          What people say about us
                        </p>
                    </div>
=======
                    <div className ="testimonial-title">
                        <h1>Customers love us</h1>
                        <hr/>
                    </div>
                    <blockquote id="testament">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    </blockquote>
>>>>>>> ec2b8b25ecbeefe645b53076de717a0d75dbd472
                </div>
            </div>
        )
    }
}
