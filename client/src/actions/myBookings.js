import { resetCreateBookingForm } from "./createBookingForm"
//sync
export const setMyBookings = bookings => {
  return {
    type: "SET_MY_BOOKINGS",
    bookings
  }
}

export const setNewBooking = booking => {
  return {
    type: "SET_NEW_BOOKING",
    booking
  }
}

export const clearMyBookings = () => {
  return {
    type: "CLEAR_MY_BOOKINGS"
  }
}

//async
export const getMyBookings = () => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/users/:id/bookings`, {
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
        dispatch(setMyBookings(response))
      }
    })
    .catch(console.log)

  }
}

export const createBooking = credentials => {
  return dispatch => {
    const bookingInfo = {
      booking: credentials
    }

    return fetch('http://localhost:3001/api/create_booking', {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookingInfo)
    })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setNewBooking(response))
        dispatch(getMyBookings())
        dispatch(resetCreateBookingForm())
      }
    })
    .catch(console.log)
  }
}
