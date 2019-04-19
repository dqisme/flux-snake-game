import { ReduceStore } from 'flux/utils';

import Dispatcher from './Dispatcher';

class SnakeStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState = () => [];


  reduce(state) {
    return state;
  }
}

export default new SnakeStore();
