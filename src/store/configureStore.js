import { createStore } from 'redux';
import rootReducers from '../reducers';
import devToolsEnhancer from 'remote-redux-devtools';

export default function configureStore(initialState) {
  return createStore(rootReducers, initialState, devToolsEnhancer());
}
