import {
  createStore, applyMiddleWare, combineReducers,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countriesReducer from './reducers/countriesReducers';

const reducer = combineReducers({
  countries: countriesReducer,
});

const store = createStore(
  reducer,
  applyMiddleWare(logger, thunk),
);

export default store;
