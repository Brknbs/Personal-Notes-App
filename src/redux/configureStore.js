import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { apiMiddleware } from './middlewares';

const configureStore = (initialState) => {
  return createStore(rootReducer, initialState, applyMiddleware(apiMiddleware));
}

export default configureStore;