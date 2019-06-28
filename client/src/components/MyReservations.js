import React from 'react'
import ReservationCard from './ReservationCard'
import { connect } from 'react-redux'


const MyReservations = ({ myReservations, currentUser}) => {
  const reservationCards = myReservations.length > 0 ? myReservations.map(r => <ReservationCard reservation={r} key={r.id}/>) : null
  
  return (
    <div className="MyReservations">

     {reservationCards}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    myReservations: state.myReservations,
    currentUser: state.currentUser

  }
}

export default connect(mapStateToProps)(MyReservations)
