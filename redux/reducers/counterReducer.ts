// reducer.ts

import {
  INCREMENT,
  DECREMENT,
  IncrementAction,
  DecrementAction,
} from '../action/action1';

interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

type CounterActionTypes = IncrementAction | DecrementAction;

const counterReducer = (
  state = initialState,
  action: CounterActionTypes,
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
