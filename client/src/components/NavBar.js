import React from 'react'
import Login from './Login'
import Logout from './Logout'
import { connect } from 'react-redux'


const NavBar = ({ currentUser }) => {

  return (
    <div className="NavBar">
    <strong>{ currentUser ? `Wlecome, ${currentUser.firstname} ${currentUser.lastname}` : "" }</strong>
    { currentUser ? <Logout/> : <Login/> }

    </div>
  )
}

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar)