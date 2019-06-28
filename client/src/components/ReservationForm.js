import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../styles/registration.css'
import Toolbar from '@material-ui/core/Toolbar';
import { connect } from 'react-redux';
import { createReservation } from '../actions/myReservations'
import { updateCreateReservationForm } from '../actions/createReservationForm'
import { Link, Route, withRouter } from 'react-router-dom';


const ReservationForm = ({ createReservationFormData, updateCreateReservationForm, createReservation}) => {


  const handleChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...createReservationFormData,
      [name]: value
    }
    updateCreateReservationForm(updatedFormInfo)
  }


  const handleSubmit = event => {
    event.preventDefault()
    createReservation(createReservationFormData)
    history.push('/')

  }

    return (
    <div className="UserForm">

        <div className="UserForm-title">
        <Toolbar>Reservation Details</Toolbar>
        </div>
        <br />
        <form id="multi-form" onSubmit={handleSubmit}>

        <TextField
        name="start_date"
        placeholder="Start Date"
        onChange={handleChange}
        value={createReservationFormData.start_date}
        required
        />
        <br />
        <TextField
        name="end_date"
        placeholder="End Date"
        onChange={handleChange}
        value={createReservationFormData.end_date}
        required
        />
        <br />
        <div className="reg-btn">

        <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        >Sign Up</Button>

        </div>


    </form>
</div>
    )
  }


const mapStateToProps = state => {
  return {
  createReservationFormData: state.createReservationForm
  }
}


export default withRouter(connect(mapStateToProps, { updateCreateReservationForm, createReservation })(ReservationForm))
