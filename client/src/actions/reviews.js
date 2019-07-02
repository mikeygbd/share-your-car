import { resetCreateReviewForm } from "./createReviewForm"

//sync
export const setReviews = reviews => {
  return {
    type: "SET_REVIEWS",
    reviews
  }
}
export const setNewReview = review => {
  return {
    type: "SET_NEW_REVIEW",
    review
  }
}

//async
export const getReviews = () => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/reviews`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setReviews(response))
      }
    })
    .catch(console.log)

  }
}

export const createReview = credentials => {
  return dispatch => {
    const reviewInfo = {
      review: credentials
    }

    return fetch('http://localhost:3001/api/create_review', {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(reviewInfo)
    })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setNewReview(response))
        dispatch(getReviews())
        dispatch(resetCreateReviewForm())
      }
    })
    .catch(console.log)
  }
}
