export default (state = null, action) => {
  switch(action.type) {
    case "SET_CURRRENT_USER":
      return action.user
    default:
      return state
  }
}
