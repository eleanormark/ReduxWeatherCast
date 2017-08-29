import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  console.log('Action in reducer_weather', action);
  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state]; //create new instance of state
  }
  return state;
}
