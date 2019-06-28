export const updateCreateBookingForm = (formData) => {

  return {
    type: "UPDATE_CREATE_BOOKING_FORM",
    formData
  }
}

export const resetCreateBookingForm = () => {

  return {
    type: "RESET_CREATE_BOOKING_FORM"
  }
}
