import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser'
import Button from '@material-ui/core/Button';


const Logout = ({ logout }) => {



  return (
    <form onSubmit={logout}>
      <Button type="submit" variant="contained" size="small" color="primary" >
             Logout
           </Button>
    </form>
  )
}

export default connect(null, { logout })(Logout)
