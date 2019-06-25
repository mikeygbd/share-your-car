import React from 'react'
import CarCard from './CarCard'
import { connect } from 'react-redux'


const MyCars = ({ myCars, allCars }) => {
  const carCards = myCars.length > 0 ? myCars.map(c => <CarCard car={c} key={c.id}/>) : null

  return (
     carCards
  )
}

const mapStateToProps = state => {
  return {
    myCars: state.myCars,
    allCars: state.cars
  }
}

export default connect(mapStateToProps)(MyCars)
