import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './styles/UserHome.css';


export default class UserHome extends Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
          <h2>UserHome</h2>
        </div>
      </div>
    );
  }
}
