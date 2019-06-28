export default (state = [], action) => {
  switch(action.type) {
    case "SET_MY_BOOKINGS":
    return action.Bookings
    case "CLEAR_MY_BOOKINGS":
    return []
    default:
    return state
  }
}
