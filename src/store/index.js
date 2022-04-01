// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from '../reducers';
import listMiddleware from '../middlewares/listMiddleware';
import detailMiddleware from '../middlewares/detailMiddleware';

// == Enhancers
const composeEnhancers = compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    listMiddleware,
    detailMiddleware,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  enhancers,
);

// == Export
export default store;
