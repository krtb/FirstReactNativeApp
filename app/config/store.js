import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// can use logging to make sure that our redux state is updating correctly

import reducer from '../reducers';

// check makes sure that this middleware only works in a development environment
const middleware = [];
if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;