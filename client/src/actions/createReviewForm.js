export const updateCreateReviewForm = (formData) => {

  return {
    type: "UPDATE_CREATE_REVIEW_FORM",
    formData
  }
}

export const resetCreateReviewForm = () => {

  return {
    type: "RESET_CREATE_REVIEW_FORM"
  }
}
