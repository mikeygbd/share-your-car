import React from 'react'
import { TextField, Button, Toolbar } from '@material-ui/core';
import '../styles/registration.css'
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
     if (window.confirm('Are you sure you wish to reserve this car?'))
    createReservation(createReservationFormData)
    history.push('/my_profile')

  }

    return (

      <div className="Reservation">
        <div className="UserForm">
          <div className="UserForm-title">
            <Toolbar>Reservation Details</Toolbar>
          </div>
          <br />
          <form id="multi-form" onSubmit={handleSubmit}>
            <img src={createReservationFormData.car.img} width="276" alt="car"/><br />
            <TextField
              InputLabelProps={{ shrink: true }}
              label="Start Date"
              name="start_date"
              type="date"
              onChange={handleChange}
              value={createReservationFormData.start_date}
              required
              />
            <br />
            <TextField
              InputLabelProps={{ shrink: true }}
              label="Return Date"
              name="end_date"
              type="date"
              onChange={handleChange}
              value={createReservationFormData.end_date}
              required
              />
            <br />
            <TextField
              InputLabelProps={{ shrink: true }}
              label="Start Time"
              name="start_time"
              type="time"
              onChange={handleChange}
              value={createReservationFormData.start_time}
              required
              />
            <br />
            <TextField
              InputLabelProps={{ shrink: true }}
              label="Return Time"
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
