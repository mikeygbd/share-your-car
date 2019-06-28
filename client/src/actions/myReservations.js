import { resetCreateReservationForm } from "./createReservationForm"
//sync
export const setMyReservations = reservations => {
  return {
    type: "SET_MY_RESERVATIONS",
    reservations
  }
}

export const setNewReservation = reservation => {
  return {
    type: "SET_NEW_RESERVATION",
    reservation
  }
}

export const clearMyReservations = () => {
  return {
    type: "CLEAR_MY_RESERVATIONS"
  }
}

//async
export const getMyReservations = () => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/users/:id/reservations`, {
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
        dispatch(setMyReservations(response))
      }
    })
    .catch(console.log)

  }
}

export const createReservation = credentials => {
  return dispatch => {
    const reservationInfo = {
      reservation: credentials
    }

    return fetch('http://localhost:3001/api/create_reservation', {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(reservationInfo)
    })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setNewReservation(response))
        dispatch(getMyReservations())
        dispatch(resetCreateReservationForm())
      }
    })
    .catch(console.log)
  }
}
