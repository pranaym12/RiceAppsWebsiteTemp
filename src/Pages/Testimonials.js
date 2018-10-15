import React, { Component } from 'react';
import './common.css';
import './Testimonials.css';

export default class Testimonials extends Component {
    render() {
        return (
            <div className="TestimonialsWrapper">
                <div className="outside-testimonials">
                    <div className="horz-line"></div>
                    <blockquote id="testament">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    </blockquote>
                    <p id="testimonial-title">
                        Customers love us
                    </p>
                </div>
            </div>
        )
    }
}
