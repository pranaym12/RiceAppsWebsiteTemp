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
                    <div className ="testimonial-title">
                        <h1>Customers love us</h1>
                        <hr/>
                    </div>
                </Parallax>
                    <blockquote id="testament">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    </blockquote>
                </div>
            </div>
        )
    }
}
