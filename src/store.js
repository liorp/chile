import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from "./reducers";

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
