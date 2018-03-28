import React, { Component } from 'react';
import './Header.css';
import logo from './img/logo.png'

class Header extends Component {
  render() {
    return (
      <div className = "container-fluid header">
        <div className="row">
          <div className="col-md-12">
            <img src={logo}/>
          </div>
        </div>
      </div>
    );
  }
} 

export default Header;