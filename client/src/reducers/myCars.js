import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
  switch(action.type) {
    case "SET_MY_CARS":
    return action.cars
    case "CLEAR_MY_CARS":
    return []
    case "SET_NEW_MY_CAR":
    return [...state, action.car]
    case actionTypes.REMOVE_CAR:
      return state.filter((data, i) => i !== action.id);
    default:
    return state
  }
}
