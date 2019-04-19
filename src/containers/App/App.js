import React, { Component } from 'react';
import { Container } from 'flux/utils';
import {
  times,
  constant,
} from 'lodash';

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
      <div data-testid="grid">
        {times(10, () => times(10, constant(0))).map((row, rowId) =>
          <div key={rowId}>
            {row.map((value, columnId) =>
              <span key={`${rowId}${columnId}`} role="cell">{value}</span>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Container.create(FluxContainerConvert.convert(App));
