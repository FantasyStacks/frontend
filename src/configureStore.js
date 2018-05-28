import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'

import rootReducer from './reducers'

const getMiddleware = () => {
  const middleware = [promise(), thunk]
  const devMiddleware = [...middleware, createLogger()]

  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    return composeWithDevTools(applyMiddleware(...devMiddleware));
  } else {
    return applyMiddleware(...middleware)
  }
}

const configureStore = () => {
  const initialState = {}

  const store = createStore(
    rootReducer,
    initialState, 
    getMiddleware()
  )
  
  return store
}

export default configureStore