import React from 'react'
import CarCard from './CarCard'
import { connect } from 'react-redux'


const MyCars = ({ myCars, currentUser}) => {
  const carCards = myCars.length > 0 ? myCars.map(c => <CarCard car={c} key={c.id}/>) : null
  const Title = myCars.length === 0 ? "You Have No cars": null

  return (
    <div className="MyCars">

     {carCards}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    myCars: state.myCars,
    currentUser: state.currentUser

  }
}

export default connect(mapStateToProps)(MyCars)
