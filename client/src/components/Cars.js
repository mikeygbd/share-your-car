import React from 'react'
import CarCard from './CarCard'
import { connect } from 'react-redux'


const Cars = ({ allCars }) => {
  const carCards = allCars.length > 0 ? allCars.map(c => <CarCard car={c} key={c.id}/>) : null

  return (
     carCards
  )
}

const mapStateToProps = state => {
  return {
    allCars: state.cars
  }
}

export default connect(mapStateToProps)(Cars)
