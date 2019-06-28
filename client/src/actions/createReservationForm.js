export const updateCreateReservationForm = (formData) => {

  return {
    type: "UPDATE_CREATE_RESERVATION_FORM",
    formData
  }
}

export const resetCreateReservationForm = () => {

  return {
    type: "RESET_CREATE_RESERVATION_FORM"
  }
}
