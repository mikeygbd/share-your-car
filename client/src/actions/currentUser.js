import { resetLoginForm } from "./loginForm"
import { resetSignupForm } from "./signupForm"

import { getMyCars, clearMyCars} from "./myCars"
import { getCars } from "./cars"

//synchronous action creators
export const setCurrentUser = user => {
  return {
    type: "SET_CURRRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}



//asynchronous action creators
export const signup = credentials => {
  return dispatch => {
    return fetch('http://localhost:3001/api/users', {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
    .then(r => r.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
        dispatch(getMyCars())
        dispatch(getCars())
        dispatch(resetSignupForm())
      }
    })
    .catch(console.log)
  }
}

export const login = credentials => {
  return dispatch => {
    return fetch('http://localhost:3001/api/login', {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
    .then(r => r.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
        dispatch(getMyCars())
        dispatch(getCars())
        dispatch(resetLoginForm())
      }
    })
    .catch(console.log)
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    dispatch(clearMyCars())
    return fetch('http://localhost:3001/api/logout', {
      credentials: "include",
      method: "DELETE"
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch('http://localhost:3001/api/get_current_user', {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(r => r.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
        dispatch(getMyCars())
        dispatch(getCars())
      }
    })
    .catch(console.log)
  }
}
