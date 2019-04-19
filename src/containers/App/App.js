import React, { Component } from 'react';
import { Container } from 'flux/utils';

import SnakeStore from '../../data/SnakeStore';
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
      <div data-testid="grid"></div>
    );
  }
}

export default Container.create(FluxContainerConvert.convert(App));
