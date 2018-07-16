import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isAnimating: false,
    };
  }
  
  render() {
    const { isAnimating } = this.state;

    return (
      <div className="app">
        <nav>
          <div className="brand small">My Stylish Site</div>
          <div className="menu small">Menu</div>

          <div className="brand large">My Stylish Site</div>
          <div className="menu large">About Projects Contact</div>
        </nav>
        <div className="animations">
          <div className="square my-animation">My text</div>
          <div className="circleish my-animation2"></div>
          <div className="more-square"></div>
          <div>
            <div className={isAnimating ? "square my-animation" : "square"}></div>
            <button onClick={() => this.setState({ isAnimating: !isAnimating })}>Animate!</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
