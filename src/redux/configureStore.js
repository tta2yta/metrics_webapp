import {
  createStore, applyMiddleware, combineReducers,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import companiesReducer from './reducers/companiesReducers';

const reducer = combineReducers({
  companies: companiesReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
