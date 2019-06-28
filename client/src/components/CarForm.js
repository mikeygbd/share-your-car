import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../styles/registration.css'
import Toolbar from '@material-ui/core/Toolbar';
import { connect } from 'react-redux';
import { signupCar } from '../actions/myCars'
import { updateSignupCarForm } from '../actions/signupCarForm'
import { withRouter } from 'react-router-dom';


const CarForm = ({ history, signupCarFormData, updateSignupCarForm, signupCar}) => {




const mapStateToProps = state => {
  return {
  signupCarFormData: state.signupCarForm
  }
}


export default withRouter(connect(mapStateToProps, { updateSignupCarForm, signupCar })(CarForm))
