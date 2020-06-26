import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import challengesReducer from './reducers/challengesReducers';
import paymentsReducer from './reducers/paymentsReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  challengesReducer,
  paymentsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));
export default store;