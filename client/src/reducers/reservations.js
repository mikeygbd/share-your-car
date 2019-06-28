


export default (state = [], action) => {
  switch(action.type) {
    case "SET_RESERVATIONS":
    return action.Reservations
    default:
    return state
  }
}
