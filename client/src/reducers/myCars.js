export default (state = [], action) => {
  switch(action.type) {
    case "SET_MY_CARS":
    return action.cars
    case "CLEAR_MY_CARS":
    return []
    default:
    return state
  }
}
