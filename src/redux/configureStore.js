import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { apiMiddleware } from './middlewares';

const configureStore = (initialState) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(apiMiddleware)));
}

export default configureStore;