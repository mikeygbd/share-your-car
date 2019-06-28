import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../styles/registration.css'
import Toolbar from '@material-ui/core/Toolbar';
import { connect } from 'react-redux';
import { signupCar } from '../actions/myCars'
import { updateSignupCarForm } from '../actions/signupCarForm'


const CarForm = ({ history, signupCarFormData, updateSignupCarForm, signupCar}) => {


