// Import
import { createStore, applyMiddleware, compose } from 'redux';

// Local import
import ajax from './ajax';
import reducer from './reducer';

// Code

// Enhancer DevTools
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

// Enhancer Ajax
const ajaxEnhancer = applyMiddleware(ajax);

// Enhancers
const enhancers = compose(ajaxEnhancer, ...devTools);

// Store
const store = createStore(reducer, enhancers);

// Export
export default store;
