import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../counterSlice';
import reducer from '../reducers/reducers';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    reducer: reducer,
  },
});

export default store;
