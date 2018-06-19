import { createStore } from 'redux';

import middleware from './middleware.js';
import reducers from '../reducers/index.js';

const store = createStore(reducers, middleware);

export default store;