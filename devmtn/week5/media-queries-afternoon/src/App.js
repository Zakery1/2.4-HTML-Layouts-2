import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
      super();
      this.state = {
        showMenu: false,
      };
    }

  render() {
    const {showMenu} = this.state
    return (
      <div className="body">
      <nav>
        <div className="brand small">Start Bootstrap</div>
        <div className="menu small">
            <button className="menu-button" onClick={() => this.setState({showMenu: !showMenu})}>Menu</button>
        </div>
          <div className="brand large">Start Bootstrap</div>
          <div className="menu large">
              <button className="top-menu-buttons">SERVICES</button>
              <button className="top-menu-buttons">PORTFOLIO</button>
              <button className="top-menu-buttons">ABOUT</button>
              <button className="top-menu-buttons">TEAM</button>
              <button className="top-menu-buttons">CONTACT</button>
          </div>
          <div className={showMenu ? "drawer open" : "drawer"}>
            <div className="drawer-buttons">
              <a href="#services" className="mobile-menu-buttons">SERVICES</a>
              <a href="#portfolio" className="mobile-menu-buttons">PORTFOLIO</a>
              <a href="#about" className="mobile-menu-buttons">ABOUT</a>
              <a href="#team" className="mobile-menu-buttons">TEAM</a>
              <a href="#contact" className="mobile-menu-buttons">CONTACT</a>

            </div>
        </div>
      </nav>
      <div className="upper-div">
         <div className="welcome">Welcome to our studio</div>
         <div className="meet-you">IT'S NICE TO MEET YOU BRO</div>
         <button className="tell-me-button">Tell Me More</button>
        </div>

        <div className="sections">
          <div className="first-body" id="services">
              <div className="section-name">Services</div> 
              <div className="image"></div>
              <button className="section-button">learn more</button>
          </div>
          <div className="first-body" id="portfolio">
              <div className="section-name">Portfolio</div> 
              <div className="image"></div>
              <button className="section-button">learn more</button>
          </div>
          <div className="first-body" id="about">
          <div className="section-name">About</div> 
          <div className="image"></div>
              <button className="section-button">learn more</button>
          </div>
          <div className="first-body" id="team">
          <div className="section-name">Team</div> 
          <div className="image"></div>
              <button className="section-button">learn more</button>
          </div>
          <div className="first-body" id="contact">
          <div className="section-name">Contact</div> 
          <div className="image"></div>
              <button className="section-button">learn more</button>
          </div>
          
        </div>

      </div>
    );
  }
}

export default App;
