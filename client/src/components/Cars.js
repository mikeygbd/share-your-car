import React from 'react'
import CarCard from './CarCard'
import { connect } from 'react-redux'


const Cars = ({ cars, reviews}) => {
  const carCards = cars.length > 0 ? cars.map(c => <CarCard car={c} key={c.id}/>) : null

  return (
    <div className="Cars">
     {carCards}
     </div>
  )
}

const mapStateToProps = state => {
  return {
    cars: state.cars,
    reviews: state.reviews
  }
}

export default connect(mapStateToProps)(Cars)
