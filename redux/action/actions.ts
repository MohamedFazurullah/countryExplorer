import {Dispatch} from 'redux';
import axios from 'axios';
import {AppAction, AppState} from '../types/index'; // Define your action types and state shape in types.ts

export const fetchArrayData = () => {
  return async (dispatch: Dispatch<AppAction>) => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const dataArray = response.data; // Assuming the response is an array
      dispatch({type: 'FETCH_ARRAY_SUCCESS', payload: dataArray});
    } catch (error) {
      dispatch({type: 'FETCH_ARRAY_FAILURE', payload: error.message});
    }
  };
};
