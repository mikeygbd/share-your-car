import React from 'react'
import CarCard from './CarCard'
import { connect } from 'react-redux'


const MyCars = ({ cars }) => {
  const carCards = cars.length > 0 ? cars.map(c => <CarCard car={c} key={c.id}/>) : null

  return (
     carCards
  )
}

const mapStateToProps = state => {
  return {
    cars: state.myCars
  }
}

export default connect(mapStateToProps)(MyCars)
