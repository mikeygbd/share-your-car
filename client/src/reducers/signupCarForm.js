
const initialState = {
  make: "",
  model: "",
  year: "",
  daily_rate: "",
  weekly_discount: "",
  description: "",
  monthly_discount: "",
  img: ""

}

export default (state=initialState, action) => {
  switch(action.type) {
    case "UPDATE_SIGNUP_CAR_FORM":
      return action.formData
      case "RESET_SIGNUP_CAR_FORM":
      return initialState
    default:
      return state
  }
}
