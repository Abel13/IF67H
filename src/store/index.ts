import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const enhancer = applyMiddleware(...middlewares)

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store;