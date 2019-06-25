import React from 'react'
import MyCars from './MyCars'
import Cars from './Cars'
import carCss from '../styles/car.css'
import { connect } from 'react-redux'


const MainContainer = ({ currentUser, cars}) => {
  return (
  <div className="MainContainer">
  
    <br />
    <div className="Cars">
    <Cars/>
    </div>


  </div>
  )
}

const mapStateToProps = ({currentUser, cars}) => {
  return {
    currentUser,
    cars
  }
}

export default connect(mapStateToProps)(MainContainer)
