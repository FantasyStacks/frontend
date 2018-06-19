import { createStore } from 'redux';

import { middleware } from './middleware.js'
import { reducers } from '../reducers/index.js'

export const store = createStore(reducers, middleware)
