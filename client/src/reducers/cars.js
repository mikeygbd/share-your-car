


export default (state = [], action) => {
  switch(action.type) {
    case "SET_CARS":
    return action.cars
    case "SET_NEW_CAR":
    return [...state, action.car]
    default:
    return state
  }
}
