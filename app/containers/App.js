import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DevTools from './DevTools';
import Nav from '../components/Nav'

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return (
      <div>
        <Nav/>
        {this.props.children}
        {
          (() => {
            if (process.env.NODE_ENV !== 'production') {

              return <DevTools />;
            }
          })()
        }
      </div>
    );
  }
}
