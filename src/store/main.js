import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import appReducers from "./reducers/app.reducer";
import { initialAppState } from './states/app.state';

const middlewares = [thunk];

const store = createStore(appReducers, initialAppState, applyMiddleware(...middlewares));

export default store;
