


export default (state = [], action) => {
  switch(action.type) {
    case "SET_REVIEWS":
    return action.reviews
    case "SET_NEW_REVIEW":
    return [...state, action.review]
    default:
    return state
  }
}
