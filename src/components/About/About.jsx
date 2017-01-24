// src/components/About/index.js
import React, { Component } from 'react';
import './about.css';

class About extends Component {
  // static propTypes = {}
  // static defaultProps = {}
  // state = {}

  render() {
    return (
      <div className='About'>
        <h1>
          About
        </h1>
        <iframe width='360' src='https://www.youtube.com/embed/FYOSmzMVB88' frameborder='0' allowfullscreen='true'></iframe>
      </div>
    );
  }
}

export default About;
