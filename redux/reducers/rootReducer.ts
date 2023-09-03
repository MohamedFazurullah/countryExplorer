// rootReducer.ts

import {combineReducers} from 'redux';
import counterReducer from '../reducers/counterReducer';
import reducer from './reducers';

const rootReducer = combineReducers({
  counter: counterReducer,
  reducer: reducer,
});

export default rootReducer;
