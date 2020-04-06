import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import storeState from './reducers';
import storeStart from './sagas';

const createReduxStore = () => {
  const reducer = combineReducers({
    ...storeState,
  });

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(storeStart);

  return store;
};

export default createReduxStore;
