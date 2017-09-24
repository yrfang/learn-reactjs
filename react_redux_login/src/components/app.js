import React, { Component } from 'react';
// import styles from './app.css';
import styles from './app.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="title">React simple starter</div>
        <p className={styles.title}>Hi</p>
        <p className="test">Yes</p>
      </div>
    );
  }
}
