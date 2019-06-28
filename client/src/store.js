
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './reducers/users'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import myCars from './reducers/myCars'
import cars from './reducers/cars'
import signupCarForm from './reducers/signupCarForm'
import createReservationForm from './reducers/createReservationForm'
import myReservations from './reducers/myReservations'
import myBookings from './reducers/myBookings'




const reducers = combineReducers({
  users: usersReducer,
  currentUser,
  loginForm,
  signupForm,
  myCars,
  signupCarForm,
  createReservationForm,
  myReservations,
  myBookings,
  cars
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

export default store
