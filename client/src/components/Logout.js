import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser'
import Button from '@material-ui/core/Button';
import '../styles/registration.css'
import Toolbar from '@material-ui/core/Toolbar';
import { withRouter } from 'react-router-dom';

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
    <form className="logout-form" onSubmit={logout}>
      <div className="logout-btn">
        <Button  variant="contained" size="small" color="primary" type="submit" onSubmit={handleSubmit} >
           Logout
        </Button>
      </div>
    </form>
  </div>
  </div>
  )
}

export default withRouter(connect(null, { logout })(Logout))
