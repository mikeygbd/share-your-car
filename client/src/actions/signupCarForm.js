export const updateSignupCarForm = (formData) => {

  return {
    type: "UPDATE_SIGNUP_CAR_FORM",
    formData
  }
}

export const resetSignupCarForm = () => {

  return {
    type: "RESET_SIGNUP_CAR_FORM"
  }
}
