
const initialState = {
  rating: "",
  content: "",
    car: {
      car_id: "",
      make: "",
      model: "",
      year: "",
      daily_rate: "",
      weekly_rate: "",
      monthly_rate: "",
      img: "",
      description: ""
    },
    customer: {
      id:"",
      firstname: "",
      lasname: "",
      email: "",
      img: ""
    },
    reservation: {
      id:"",
      start_time: "",
      start_date: "",
      end_date: "",
      end_time: ""
    }

}

export default (state=initialState, action) => {
  switch(action.type) {
    case "UPDATE_CREATE_REVIEW_FORM":
      return action.formData
      case "RESET_CREATE_REVIEW_FORM":
      return initialState
    default:
      return state
  }
}
