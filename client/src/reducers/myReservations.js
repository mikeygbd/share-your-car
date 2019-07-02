export default (state = [], action) => {
  switch(action.type) {
    case "SET_MY_RESERVATIONS":
    return action.reservations
    case "CLEAR_MY_RESERVATIONS":
    return []
    case "SET_NEW_MY_RESERVATION":
    return [...state, action.reservation]
    default:
    return state
  }
}
