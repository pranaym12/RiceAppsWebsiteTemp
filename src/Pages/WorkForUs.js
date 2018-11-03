import React, { Component } from 'react';
import './WorkForUs.css';
import Slide from 'react-reveal/Slide'

export default class JoinUs extends Component {
  render() {
    return (
      <div class = "content">
      <Slide left>
        <div id = "LikeWhatYouSee">
            <hr/>
            <p id = "text1">Like what you see?</p>
        </div>
      </Slide>

      <Slide right>
        <div id="WorkForUs">
          <p id = "text2"><a href="https://google.com">Work with Us.</a></p>
          <hr/>
        </div>
      </Slide>

      </div>
    )
  }

}
