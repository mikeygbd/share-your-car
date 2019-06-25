//sync
export const setCars = cars => {
  return {
    type: "SET_CARS",
    cars
  }
}

//async
export const getCars = () => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/cars`, {
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
        console.log(response)
        dispatch(setCars(response))
      }
    })
    .catch(console.log)

  }
}
