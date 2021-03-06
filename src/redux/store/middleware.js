import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';

export const middleware = composeWithDevTools(
  applyMiddleware(
    promise(),
    thunk,
    createLogger()
  )
)
