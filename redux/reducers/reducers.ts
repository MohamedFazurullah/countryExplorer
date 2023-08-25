import {Reducer} from 'redux';
import {AppAction, AppState} from '../types/index'; // Define your action types and state shape in types.ts

const initialState: AppState = {
  arrayData: [],
  error: null,
};

const reducer: Reducer<AppState, AppAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case 'FETCH_ARRAY_SUCCESS':
      return {...state, arrayData: action.payload, error: null};
    case 'FETCH_ARRAY_FAILURE':
      return {...state, error: action.payload};
    default:
      return state;
  }
};

export default reducer;
