import React, { Component } from 'react';
import style from './../../style/HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Welcome!</h1>
          <div className={style.text}>Hi, XXX</div>
        </div>
      </div>
    );
  }
}

export default HomePage;
