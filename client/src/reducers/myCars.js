export default (state = [], action) => {
  switch(action.type) {
    case "SET_MY_CARS":
    return action.cars
    default:
    return state
  }
}
