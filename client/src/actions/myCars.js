import { resetSignupCarForm } from "./signupCarForm"
//sync
export const setMyCars = cars => {
  return {
    type: "SET_MY_CARS",
    cars
  }
}

export const setNewCar = car => {
  return {
    type: "SET_NEW_CAR",
    car
  }
}

const setNewMyCar = car => {
  return {
    type: "SET_NEW_MY_CAR",
    car
  }
}

const deleteMyCar = car => {
  return {
    type: "DELETE_MY_CAR",
    car
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

export const signupCar = carInfo => {
  return dispatch => {

    return fetch('http://localhost:3001/api/signup_car', {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(carInfo)
    })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setNewCar(response))
        dispatch(setNewMyCar(response))
        dispatch(resetSignupCarForm())
      }
    })
    .catch(console.log)
  }
}

export const deleteOwnerCar = (id) => {
  return dispatch => {

    return fetch(`http://localhost:3001/api/cars/${id}/destroy`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(deleteMyCar(response))
      }
    })
    .catch(console.log)
  }
}
