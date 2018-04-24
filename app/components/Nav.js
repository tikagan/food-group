import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <div className="nav">
          <Link to="/">Home</Link>
          <Link to="/pantry">Pantry</Link>
          <Link to="/grocerylists">GroceryLists</Link>
        </div>
      </div>
    );
  }
}
