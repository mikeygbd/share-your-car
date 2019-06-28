export default (state = [], action) => {
  switch(action.type) {
    case "SET_MY_RESERVATIONS":
    return action.reservations
    case "CLEAR_MY_RESERVATIONS":
    return []
    default:
    return state
  }
}
