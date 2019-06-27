//sync
export const setMyCars = cars => {
  return {
    type: "SET_MY_CARS",
    cars
  }
}

export const clearMyCars = () => {
  return {
    type: "CLEAR_MY_CARS"
  }
}

//async
export const getMyCars = () => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/users/:id/cars`, {
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
        dispatch(setMyCars(response))
      }
    })
    .catch(console.log)

  }
}
