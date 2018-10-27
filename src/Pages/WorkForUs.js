import React, { Component } from 'react';
import './WorkForUs.css';
import { Parallax } from 'react-scroll-parallax';

export default class JoinUs extends Component {
  render() {
    return (
      <div class = "content">
      <Parallax offsetXMax={20} offsetXMin={-20}>
        <div id = "LikeWhatYouSee">
            <hr/>
            <p id = "text1">Like what you see?</p>
        </div>
      </Parallax>

      <Parallax offsetXMax={-20} offsetXMin={20}>
        <div id="WorkForUs">
          <p id = "text2"><a href="https://google.com">Work with Us.</a></p>
          <hr/>
        </div>
      </Parallax>

      </div>
    )
  }

}
