import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from "./reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
export const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(...middlewares)),
);
export default store;
