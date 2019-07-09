import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../styles/registration.css'
import Toolbar from '@material-ui/core/Toolbar';
import { connect } from 'react-redux';
import { createReservation } from '../actions/myReservations'
import { updateCreateReservationForm } from '../actions/createReservationForm'
import { withRouter } from 'react-router-dom';


const ReservationForm = ({ history, createReservationFormData, updateCreateReservationForm, createReservation}) => {


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

      <div className="Reservation">
    <div className="UserForm">

        <div className="UserForm-title">
        <Toolbar>Reservation Details</Toolbar>
        </div>
        <br />
        <form id="multi-form" onSubmit={handleSubmit}>

        <TextField
        name="start_date"
        type="date"
        placeholder="Start Date"
        onChange={handleChange}
        value={createReservationFormData.start_date}
        required
        />
        <br />
          <TextField
          name="start_time"
          type="time"
          onChange={handleChange}
          value={createReservationFormData.start_time}
          required
          />
        <br />
        <TextField
        name="end_date"
        type="date"
        placeholder="Return Date"
        onChange={handleChange}
        value={createReservationFormData.end_date}
        required
        />
        <br />
          <TextField
          name="end_time"
          type="time"
          onChange={handleChange}
          value={createReservationFormData.end_time}
          required
          />
          <br />
        <div className="reg-btn">

        <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        >Reserve</Button>

        </div>


    </form>
</div>
</div>
    )
  }


const mapStateToProps = state => {
  return {
  createReservationFormData: state.createReservationForm
  }
}


export default withRouter(connect(mapStateToProps, { updateCreateReservationForm, createReservation })(ReservationForm))
