
const initialState = {
  start_date: "",
  start_time: "",
  end_date: "",
  end_time: "",
    car: {
      car_id: "",
      make: "",
      model: "",
      year: "",
      daily_rate: "",
      weekly_discount: "",
      monthly_discount: "",
      img: "",
      description: ""
    }
}

export default (state=initialState, action) => {
  switch(action.type) {
    case "UPDATE_CREATE_RESERVATION_FORM":
      return action.formData
      case "RESET_CREATE_RESERVATION_FORM":
      return initialState
    default:
      return state
  }
}
