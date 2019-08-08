import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser'
import { Button, Toolbar } from '@material-ui/core';
import '../styles/registration.css'
import { Link, withRouter } from 'react-router-dom';

const Logout = ({ history, logout }) => {

    const handleSubmit = event => {

    event.preventDefault()

    logout()
  history.push('/')

  }


  return (
    <div className="Logout">
    <div className="UserForm">
    <div className="UserForm-title">
      <Toolbar>Are You Sure You Want To Log Out?</Toolbar>
    </div>
    <form className="logout-form" onSubmit={handleSubmit}>
      <div className="logout-btn">
        <Button  variant="contained" size="small" color="primary" type="submit"  >
           Logout
        </Button>
      </div>
    </form>
  </div>
  </div>
  )
}

export default withRouter(connect(null, { logout })(Logout))
