import React, { Component } from 'react';
import { Container } from 'flux/utils';

import SnakeStore from '../../data/SnakeStore';
import logo from '../../logo.svg';
import './App.css';
import FluxContainerConvert from '../../utils/FluxContainerConvert';

class App extends Component {
  static getStores() { return [SnakeStore]; }

  static calculateState() {
    return {
      map: SnakeStore.getState(),
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Container.create(FluxContainerConvert.convert(App));
